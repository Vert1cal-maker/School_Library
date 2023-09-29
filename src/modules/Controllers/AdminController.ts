import { NextFunction, Request, Response } from "express";
import Books from "../Models/Books";
import DataBaseRepository from "../Models/DataBaseRepository";
import { firstMigrationsCreate, secondMigration } from "../../sql/migration/Migration";




async function addBook(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Books.postBook(req, res);
    response ? res.sendStatus(201) : res.sendStatus(500);
  } catch (error) {
    next(error);
  }
}

function deleteBook(req: Request, res: Response) {
  Books.daeleteBook(req, res).then(result => {
    result ? res.redirect("/admin") : res.status(500).redirect("/admin");
  })
}

export async function startMirgation(req:Request, res: Response, next:NextFunction) {
  try {
    const appliedMigration: string[] = [];
    for (const migration of secondMigration) {
      if (!appliedMigration.includes(migration.id)) {
        const result = await DataBaseRepository.executeSqlMigrationQuery(migration.sql)
        if (result) {
          appliedMigration.push(migration.id);
          console.log(`Migration ${migration.id} applied successfully`);
        } else {
          res.status(500).redirect("/admin/api/v1");
        }
      }
    }
    res.status(201).redirect("/admin/api/v1")
  } catch (error) {
    console.log("ssssss")
    next(error) 
  }

}




export default { addBook, deleteBook, startMirgation };

