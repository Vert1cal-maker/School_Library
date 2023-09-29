import mysql, { RowDataPacket, ResultSetHeader } from "mysql2";
import { Ibook, bookData, InputSearch, TypeCount } from "./Types";
import mysqldump from "mysqldump";
import sqlConnectionConfig from "./ConnectionConfig";

const dbConnection = mysql.createConnection(sqlConnectionConfig);

function connect() {
  dbConnection.connect((error) => {
    if (error) {
      console.log(error);
      throw new Error();
    } else {
      console.log("Connected");
    }
  });
}

async function getBooksFromDatabase(
  page: number,
  limit: number = 20,
  sortQuery: string
): Promise<Ibook[]> {
  const query = `
  SELECT
    books.book_id,
    books.book_title,
    books.book_views,
    books.book_image,
    books.book_rating,
    GROUP_CONCAT(Authors.author_name SEPARATOR ', ') AS author_name,
    GROUP_CONCAT(Authors.author_id SEPARATOR ',') AS author_id,
    books.book_year
  FROM books
  JOIN books_authors ON books.book_id = books_authors.book_id
  JOIN Authors ON Authors.author_id = books_authors.author_id
  GROUP BY books.book_id
  ORDER BY ${sortQuery} DESC
  LIMIT ${limit} OFFSET ${page * limit} 
`;

  try {
    return (await dbConnection.promise().execute<Ibook[]>(query))[0]; // return two array - one rows results, second array - fields
  } catch (error) {
    throw new Error("Помилка при пошуку книг");
  }
}

async function findBooks(item: InputSearch): Promise<Ibook[]> {
  const { title, author, year } = item;
  const selectQuery = `SELECT books.book_id, books.book_title, books.book_year, books.book_image, Authors.author_name
  FROM books
  JOIN books_authors ON books.book_id = books_authors.book_id
  JOIN Authors ON books_authors.author_id = Authors.author_id`

  const titleCondition = `${selectQuery} WHERE book_title REGEXP ?`
  const authorCondition  = `${selectQuery} WHERE Authors.author_name REGEXP ? OR Authors.author_id = ?`
  const yearCondition  = `${selectQuery} WHERE book_year LIKE ?`;
  const value = title ? [title] : author ? [author, author] : [year];

  try {
    const result =
      "title" in item
        ? await dbConnection.promise().execute<Ibook[]>(titleCondition, value)
        : "author" in item
          ? await dbConnection.promise().execute<Ibook[]>(authorCondition, value)
          : await dbConnection.promise().execute<Ibook[]>(yearCondition, value);
    console.log(result[0])
    return result[0];
  } catch (error) {
    console.error("Помилка запиту до бази даних:", error);
    throw new Error("Помилка при пошуку книг");
  }
}

async function getSelectedBook(
  request: { [key: string]: string },
  offset: number = 0
): Promise<{ sample: Ibook[]; total: number }> {
  const { id, authorId } = request;

  const value = id ? [id] : [authorId];
  const query = `SELECT books.book_title, GROUP_CONCAT(Authors.author_name) AS author_name, 
  books.book_image, books.book_id, books.book_intro, GROUP_CONCAT(Authors.author_id) AS author_id
  FROM books
  JOIN books_authors ON books.book_id = books_authors.book_id
  JOIN Authors ON Authors.author_id = books_authors.author_id`;
  const condition = id ? "where books.book_id = ?" : "where Authors.author_id = ?";
  const groupQuery = "GROUP BY books.book_id";
  const takeTotalLimit = `${query} ${condition} ${groupQuery}`;
  const sample = `${takeTotalLimit} LIMIT 20 OFFSET ${offset}`;

  try {
    const total = (
      await dbConnection.promise().execute<Ibook[]>(takeTotalLimit, value)
    )[0];
    const rows = (await dbConnection.promise().execute<Ibook[]>(sample, value))[0];

    return { sample: rows, total: total.length };
  } catch (error) {
    throw new Error();
  }
}

async function getCount(): Promise<number> {
  const query = `select count(*) as totalBook from books`
  try {
    const result = await dbConnection.promise().execute<RowDataPacket[]>(query);
    const { totalBook } = result[0][0];

    return totalBook;
  } catch (error) {
    throw error;
  }
}

async function updateCount(id: number, type: TypeCount): Promise<boolean> {
  const query = `Update books set book_${type}= book_${type} + 1 where book_id = ?`;

  return responseResult(query, [id]);
}

async function setBookRating(id: number, value: number): Promise<boolean> {
  const query = `Update books set book_rating = ? where book_id = ?`;
  const values = [value, id];
  return responseResult(query, values);
}

async function insertBookIntoDatabase(data: bookData): Promise<boolean> {
  try {
    dbConnection.promise().beginTransaction();
    if (await isContain(data.bookTitle)) {
      const insertBookQuery = "INSERT INTO books (book_title, book_image, book_year, book_pages, book_intro) VALUES (?,?,?,?,?)";
      const value = [
        data.bookTitle,
        data.bookImage,
        data.bookYear,
        data.bookPages,
        data.bookDescription,
      ];

    
      const insertResult = await dbConnection
        .promise()
        .execute<ResultSetHeader>(insertBookQuery, value);
      const bookId = insertResult[0].insertId;
      for (const authors of data.authors) {
        const authorID = await addAuthor(authors);
        await createRelation(bookId, authorID);
      }
      await dbConnection.promise().commit();
      return true;
    } else {
      await dbConnection.promise().rollback();
      return false;
    }
  } catch (error) {
    await dbConnection.promise().rollback();
    return false;
  }
}

async function deleteBook(id: number): Promise<boolean> {
  const insertAuthorQuery = "DELETE from books where book_id = ?";
  const value = [id];
  try {
    await dbConnection.promise().execute<ResultSetHeader>(insertAuthorQuery, value);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteBooksByTitle(title: string[]): Promise<boolean> {
  try {
    for (const element of title) {
      const index = await findId(element);
      await RemoveRelation(index);
    }
    return true;
  } catch (error) {
    throw error;
  }
}

async function RemoveRelation(id: number): Promise<boolean> {
  const query = "Delete from books_authors where book_id = ?";

  try {
    await dbConnection.promise().execute(query, [id]);

    return true;
  } catch (error) {
    return false;
  }
}

async function findId(field: string): Promise<number> {
  const query = "SELECT book_id from books where book_title = ?";
  const value = [field];

  try {
    const index = await dbConnection.promise().execute<RowDataPacket[]>(query, value);

    return index[0][0].book_id;
  } catch (err) {
    return -1;
  }
}

async function addAuthor(name: string): Promise<number> {
  const insertAuthorQuery = "INSERT INTO Authors (author_name) VALUES (?)";
  const value = [name];
  const insertAuthorsResult = await dbConnection
    .promise()
    .execute<ResultSetHeader>(insertAuthorQuery, value);

  return insertAuthorsResult[0].insertId;
}

async function deleteAuthor(id: number): Promise<boolean> {
  const insertAuthorQuery = "DELETE from Authors where author_id = ?";
  const value = [id];
  try {
    await dbConnection.promise().execute<ResultSetHeader>(insertAuthorQuery, value);

    return true;
  } catch (error) {
    
    return false;
  }
}

async function createRelation(
  bookID: number,
  authorID: number
): Promise<boolean> {
  const insertBookAuthorQuerty =
    "INSERT INTO books_authors  (book_id, author_id) values (?,?)";
  const values = [bookID, authorID];
  try {
    await dbConnection.promise().execute(insertBookAuthorQuerty, values);

    return true;
  } catch (error) {
    return false;
  }
}

async function isContain(name: string): Promise<boolean> {
  const query = `SELECT COUNT(*) as count from books where book_title= ? `;
  const value = [name];
  const result = await dbConnection.promise().execute<RowDataPacket[]>(query, value);
  return result[0][0].count === 0;
}

async function responseResult(
  query: string,
  value: (number | string)[]
): Promise<boolean> {
  try {
    const result = await dbConnection.promise().execute(query, value);

    return !!result[0];
  } catch (error) {
    return false;
  }
}

async function executeSqlMigrationQuery(sql: string): Promise<boolean> {
  try {
    dbConnection.query(sql);
    return true;
  } catch (error) {
    return false;
  }
}

async function removeOrphansFromDatabase() {
  try {
    await dbConnection.promise().beginTransaction();
    const firstQuery = `
    SELECT Authors.author_id
    FROM Authors
    LEFT JOIN books_authors ON Authors.author_id = books_authors.author_id
    WHERE books_authors.author_id IS NULL`;

    const authorResult = await dbConnection
      .promise()
      .execute<RowDataPacket[]>(firstQuery);
    const authorsId = authorResult[0];

    const secondQuery = `SELECT books.book_id 
    FROM books
    LEFT JOIN books_authors ON books.book_id = books_authors.book_id  
    WHERE books_authors.book_id IS NULL`;
    const booksResult = await dbConnection
      .promise()
      .execute<RowDataPacket[]>(secondQuery);
    const booksId = booksResult[0];

    if (authorsId[0]) {
      for (const author of authorsId) {
        await deleteAuthor(author.author_id);
      }
    }
    if (booksId[0]) {
      for (const book of booksId) {
        await deleteBook(book.book_id);
      }
    }
    await dbConnection.promise().commit();
    console.log("Done");
    return true;
  } catch (error) {
    await dbConnection.promise().rollback();
    return false;
  }
}

function createDatabaseDump() {
  mysqldump({
    connection: sqlConnectionConfig,
    dumpToFile: "../../sql/dump/dump.sql",
  })
    .then(() => {
      console.log("Dump created successfully");
    })
    .catch((error) => {
      console.error("Error creating dump:", error);
    });
}

export default {
  getBooksFromDatabase,
  findBooks,
  getSelectedBook,
  getCount,
  insertBookIntoDatabase,
  updateCount,
  deleteBooksByTitle,
  setBookRating,
  executeSqlMigrationQuery,
  createDatabaseDump,
  removeOrphansFromDatabase,
};
