import { Request, Response, NextFunction } from "express";
import { RequestErorr } from "./Types";
interface Ierror {
  status: number,
  message: RequestErorr
}


const errorResponse: Ierror = {
  status: 500,
  message: RequestErorr.SERVER_ERR
}


function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);

  switch (err.name) {
    case ('NotNumber'):
      errorResponse.status = 400;
      errorResponse.message = RequestErorr.BAD_REQUEST;
      res.status(errorResponse.status).send({ error: errorResponse.message });
    case ("NotFound"):
      errorResponse.status = 404;
      errorResponse.message = RequestErorr.NOT_FOUND;
      res.status(errorResponse.status).send({ error: errorResponse.message });
    default:
      res.status(errorResponse.status).send({ error: errorResponse.message });
  }


}

export default errorHandler;
