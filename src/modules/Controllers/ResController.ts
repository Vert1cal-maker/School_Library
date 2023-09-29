
import Books from "../Models/Books";
import { NextFunction, Request, Response } from "express";

async function handleSearchParams(req: Request, res: Response, next: NextFunction) {
    try {
        const response = await Books.getSearchedData(req);
        res.send(response);
    } catch (error) {
        next(error)
    }
}

async function handleWantedBooks(req: Request, res: Response, next: NextFunction) {
    try {
        const response = req.query.rating ? await Books.setBookRating(req) : await Books.booksCountIncrease(req, res);
        res.send(response);
    } catch (error) {
        next(error);
    }
}


export default { handleSearchParams, handleWantedBooks }

