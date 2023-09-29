import fs from "fs";
import { Ibook, pagination } from  "../../modules/Models/Types"



function replaceTags(data: Ibook): string {
  const part = fs.readFileSync('/home/vert1cal/node-js/3.2/src/modules/themplates/TableBookInfo.html', 'utf-8');
  return part.replace(/{{book_title}}/g, String(data.book_title))
    .replace(/{{book_author}}/g, String(data.author_name))
    .replace(/{{book_year}}/g, String(data.book_year))
    .replace(/{{book_views}}/g, String(data.book_views))
    .replace(/{{book_raiting}}/g, String(data.book_rating))
}

function replaceHtml(teplate: string, bookTable: string, pagination: string): string {
  return teplate.replace("{{tableBook}}", bookTable).replace("{{pagination}}", pagination);
}

function makePagination(data: pagination): string {
  const totalPages = data.totalBooks / data.itemsPerPage;
  let html: string = '';
  try {
    for (let i = 0; i <= totalPages; ++i) {
      html += `<li><a href="http://localhost:3030/admin/api/v1/?page=${i}&itemsPerPage=${data.itemsPerPage}">${i + 1}</a></li>`
    }

    return html;
  } catch (error) {
    return "";
  }
}

function sendAdminPage(data: Ibook[], paginationFn: (currentOffset: number, itemsPerPage: number, totalsItems: number) => pagination,
  paginationData: pagination): string {

  const adminPage = fs.readFileSync('/home/vert1cal/node-js/3.2/src/modules/themplates/AdminPanel.html', 'utf-8');
  const newHtml: string = data.map((current) => { return replaceTags(current) }).join("");
  const paginationPart = makePagination(paginationData);

  return replaceHtml(adminPage, newHtml, paginationPart);
}


function getUnauthorizedPage(): string {
  const AuthPage = fs.readFileSync('/home/vert1cal/node-js/3.2/src/modules/themplates/Unauthorized.html', 'utf-8');
  return AuthPage;
}


export default { sendAdminPage, getUnauthorizedPage }
