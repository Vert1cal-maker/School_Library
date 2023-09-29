import fs from "fs";
import { Ibook, pagination, Templates } from "../../modules/Models/Types"



let loadedTemplates: Templates;

function takeTemplatates(): Templates {
  if (loadedTemplates) {
    return loadedTemplates;
  }
  try {
    const booksTemplate = fs.readFileSync('/home/vert1cal/node-js/3.2/src/modules/themplates/books.html', 'utf-8');
    const bookTemplate = fs.readFileSync('/home/vert1cal/node-js/3.2/src/modules/themplates/book.html', 'utf-8');
    const paginationTemplate = fs.readFileSync('/home/vert1cal/node-js/3.2/src/modules/themplates/pagination.html', 'utf-8');
    const originBooksHtml = fs.readFileSync("/home/vert1cal/node-js/3.2/src/public/books-page/books-page.html", 'utf-8');
    const originBookHtml = fs.readFileSync("/home/vert1cal/node-js/3.2/src/public/book-page/book-page.html", 'utf-8');
    const notFoundHtml = fs.readFileSync('/home/vert1cal/node-js/3.2/src/public/Not_Found/404.html', "utf-8");

    loadedTemplates = { booksTemplate, bookTemplate, paginationTemplate, originBooksHtml, originBookHtml, notFoundHtml };
    return loadedTemplates;
  } catch (err) {
    const error = new Error("Not found one or more files on server dir");
    error.name = "FileNotFoundError";
    throw error;
  }
}

function replaceTagTemplate(template: string, newTemplate: string, pag?: pagination, params?: pagination) {
  if (pag) {
    const newButtonTemplate = replacePagination(pag.prevPage!, pag.nextPage!, pag.totalBooks!, params?.way!, params?.sortQuary, params?.itemsPerPage);
    return template.replace("{{books}}", newTemplate).replace("{{buttons}}", newButtonTemplate);
  } else {
    return template.replace("{{books}}", newTemplate);
  }
}

enum Author_id {
  '{{author_first_id}}',
  '{{author_second_id}}',
  '{{author_third_id}}'
}
enum Author_name {
  '{{book_author_name_first}}',
  '{{book_author_name_second}}',
  '{{book_author_name_third}}'
}


function replaceBookTemplate(template: string, field: Ibook): string {
  const authorNames = field.author_name.split(",");
  const authorIds = field.author_id.toString().split(',');
  let updatedTemplate = template;

  for (let i = 0; i < 3; i++) {
    if (authorNames[i] === undefined) {
      updatedTemplate = replaceAllTags(updatedTemplate, Author_name[i], "");
    }

    updatedTemplate = replaceAllTags(updatedTemplate, Author_id[i], authorIds[i]);
    updatedTemplate = replaceAllTags(updatedTemplate, Author_name[i], authorNames[i]);
  }


  updatedTemplate = updatedTemplate
    .replace(/{{book_id}}/g, String(field.book_id))
    .replace(/{{book_image}}/g, field.book_image)
    .replace(/{{book_name}}/g, field.book_title)
    .replace(/{{book_author}}/g, field.author_name)
    .replace(/{{description}}/g, field.book_intro ? String(field.book_intro) : "Опис відсутній");

  return updatedTemplate;
}

function replaceAllTags(template: string, tag: string, switchTag: string) {
  return template.replace(new RegExp(tag, 'g'), switchTag);
}


function replacePagination(prev: number, next: number, total: number, way: string, sort?: string, itemsPerPage?: number): string {
  const template = takeTemplatates().paginationTemplate
  const currentPage = total / prev;
  const displayPrev = currentPage < 0 ? "none" : "inline-block";
  const displayNext = next >= total / itemsPerPage! ? "none" : "inline-block";


  return template.replace(/{{url}}/g, way).replace("{{prevPage}}", String(prev) + sort)
    .replace("{{nextPage}}", String(next) + sort).replace("prevDisplay", displayPrev)
    .replace('nextDisplay', displayNext)
}


function viewBook(data: Ibook[]): string {
  try {
    const { originBookHtml, bookTemplate } = takeTemplatates();
    const newHtml = replaceBookTemplate(bookTemplate, data[0]);
    return replaceTagTemplate(originBookHtml, newHtml);
  } catch (err) {
    throw err
  }
}


function viewBooks(data: Ibook[], calculatePagination: (offset: number | undefined, itemsPerPage: number, limit: number) =>
  pagination, params: pagination): string {
  try {
    const { originBooksHtml, booksTemplate } = takeTemplatates()
    const button = calculatePagination(params.currentPage, params.itemsPerPage, params.totalBooks!)
    const newHtml: string = data.map((current) => {
      return replaceBookTemplate(booksTemplate, current);
    }).join("");

    return replaceTagTemplate(originBooksHtml, newHtml, button, params);
  } catch (error) {
    throw error;
  }
}

function notFoundPage(): string {
  try {
    return (takeTemplatates()).notFoundHtml;
  } catch (error) {
    throw error
  }
}





export default { viewBooks, viewBook, notFoundPage }
