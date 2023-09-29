import Views from "../Views/BookViews";
import AdminViews from "../Views/AdminViews";
import Books from "../Models/Books";
import calculatePagination from "../Models/PaginationLogic";
import { NextFunction, Request, Response } from "express";

async function getMainPage(req: Request, res: Response, next: NextFunction) {
  try {
    const booksData = await Books.getCollaction(req, res);
    const mainPage = Views.viewBooks(booksData, calculatePagination, res.locals.paginationInfo);
    res.send(mainPage);
  } catch (err) {
    next(err)
  }
}


async function getBookPage(req: Request, res: Response, next: NextFunction) {
  try {
    const bookData = await Books.getBook(req, res);
    if (bookData.length > 1) {
      res.send(Views.viewBooks(bookData, calculatePagination, res.locals.paginationInfo))
    } else if (bookData.length === 1) {
      res.send(Views.viewBook(bookData));
    }
  } catch (err) {
    next(err);
  }
};


function getAdminPanel(req: Request, res: Response, next: NextFunction) {
  try {
    Books.getCollaction(req, res).then((result) => {
      res.send(AdminViews.sendAdminPage(result, calculatePagination, res.locals.paginationInfo))
    });
  } catch (error) {
    next(error);
  }

};

function getNotFoundPage(req: Request, res: Response) {
  res.send(Views.notFoundPage())
}

export default { getMainPage, getBookPage, getAdminPanel, getNotFoundPage };
