import { RowDataPacket } from "mysql2";


export type pagination = {
  itemsPerPage: number;
  currentPage: number;
  totalBooks: number;
  prevPage?: number;
  nextPage?: number;
  way?: string;
  sortQuary?: string
};

export type Templates = {
  booksTemplate: string;
  bookTemplate: string;
  paginationTemplate: string,
  originBooksHtml: string;
  originBookHtml: string;
  notFoundHtml: string;
};

export interface Ibook extends RowDataPacket {
  book_id: number;
  book_title: string;
  book_image: string;
  book_year?: number;
  book_pages?: number;
  book_views?: number;
  book_rating?: number;
  book_intro?: string;
  author_name: string;
  author_id: number;
}

export type bookData = {
  bookTitle: string;
  bookYear: number;
  bookPages: number;
  bookDescription: string;
  authors: string[];
  bookImage: string;
};

export type InputSearch = { [key: string]: string | number | undefined };

export enum TypeCount {
  WANT = "wanted",
  VIEW = 'views'
}
export enum SortQuery {
  NEWS = "book_id",
  POPULAR = "book_views",
  RATING = 'book_rating'
}

export enum RequestErorr {
  NOT_FOUND = 'Resourse not found',
  BAD_REQUEST = 'Bad Request',
  SERVER_ERR = 'Internel Server Error'
}

