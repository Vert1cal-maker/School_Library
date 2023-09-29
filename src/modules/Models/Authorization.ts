import { Request, Response, NextFunction } from 'express';
import Views from '../Views/AdminViews';
import dotenv from 'dotenv'
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

const accessString = process.env.ADMIN_PASSWORD  

function checkAuth(req: Request, res: Response, next: NextFunction){
  const user = req.get("authorization");

  if(user !== accessString){
    res.set('WWW-Authenticate', 'Basic realm="Login Required"');
    res.status(401).send(Views.getUnauthorizedPage());
  }else{
    return next();
  }
};


export default checkAuth;
