import { Request, Response } from "express";
import { Ibook, pagination, bookData, TypeCount, SortQuery, RequestErorr } from "./Types";
import dataBaseRepository from "./DataBaseRepository";
import path from 'path';



async function getCollaction(req: Request, res: Response): Promise<Ibook[]> {
  try {
    const { page, itemsPerPage, sort} = req.query;

    if (page !== undefined && isNaN(+page)) {
      const err = new Error;
      err.name = RequestErorr.NOT_FOUND;
      throw err;
    }

    const totalBooks = await totalCountBooks();
    const params: pagination = {
      currentPage: page ? +page : 0,
      itemsPerPage: itemsPerPage ? +itemsPerPage : 20,
      totalBooks,
      way: req.rawHeaders[1] + req.path,
      sortQuary: sort ? `&sort=${sort}` : ''
    }
    res.locals.paginationInfo = params;
    const dataBaseResponse = await dataBaseRepository.getBooksFromDatabase(params.currentPage!, params.itemsPerPage, sortCheck(sort?.toString()));

    return dataBaseResponse;
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    throw err;
  }
}


async function getSearchedData(req: Request): Promise<Ibook[]> {
  const title = typeof req.query.title === 'string' ? req.query.title : undefined;
  const author = typeof req.query.author === 'string' ? req.query.author : undefined;
  const year = typeof req.query.year === 'string' ? req.query.year : undefined;
  const field = title ? "title" : author ? "author" : "year";
  const value: string | number = title ? title : author ? author : +year!;

  try {
    return await dataBaseRepository.findBooks({ [field]: value });
  } catch (error) {
    throw new Error("Invalid search parameter");
  }

}


function sortCheck(sortString: string | undefined): string {
  switch (sortString) {
    case ("popular"):
      return SortQuery.POPULAR;
    case ("rating"):
      return SortQuery.RATING;
    default:
      return SortQuery.NEWS;
  }
}


async function totalCountBooks(): Promise<number> {
  try {
    return await dataBaseRepository.getCount();
  } catch (error) {
    throw new Error
  }
}


async function getBook(req: Request, res: Response): Promise<Ibook[]> {
  try {
    if (isNaN(+req.params.id || +req.params.authorId)) {
      const error = new Error("parameters must be mumber");
      error.name = "NotNumber";
      throw error
    }

    const offset = isNaN(Number(req.query.offset)) ? 0 : req.query.offset;
    const books = await dataBaseRepository.getSelectedBook(req.params, Number(offset));
    const itemsPerPage = req.query.itemsPerPage ? req.query.itemsPerPage : 20;


    res.locals.paginationInfo = {
      currentOffSet: +offset!,
      itemsPerPage: itemsPerPage,
      totalBooks: books.total,
      way: req.rawHeaders[1] + req.path
    }

    await dataBaseRepository.updateCount(+req.params.id, TypeCount.VIEW)

    return (await dataBaseRepository.getSelectedBook(req.params, +offset!)).sample;

  } catch (error) {
    throw new Error;
  }

}

async function booksCountIncrease(req: Request, res: Response) {
  try {
    return await dataBaseRepository.updateCount(+req.params.id, TypeCount.WANT);
  } catch (error) {
    throw new Error
  }
}

async function daeleteBook(req: Request, res: Response): Promise<boolean> {
  const { selectedTitles } = req.body;
  try {
    return await dataBaseRepository.deleteBooksByTitle(selectedTitles);
  } catch (error) {
    throw new Error
  }
}

async function setBookRating(req: Request): Promise<boolean> {
  try {
    return await dataBaseRepository.setBookRating(+req.params.id, +req.query.rating!)
  } catch (error) {
    throw new Error
  }
}





async function postBook(req: Request, res: Response) {
  try {
    const { bookTitle, bookYear, bookPages, bookDescription, bookImage, authors } = req.body
    const imageFolder = "/books-page/books-page_files/";
    const authorsArray: string[] = authors
      .filter((author:string): author is string => typeof author === 'string' && author.trim() !== "")
      .map((author:string) => author.trim());


    const data: bookData = {
      bookTitle,
      bookYear,
      bookPages,
      bookDescription,
      authors: authorsArray,
      bookImage: `${imageFolder}${bookImage}`
    }
    return await dataBaseRepository.insertBookIntoDatabase(data);
  } catch (error) {
    throw error
  }
}



export default { getCollaction, getBook, totalCountBooks, getSearchedData, postBook, booksCountIncrease, daeleteBook, setBookRating };
