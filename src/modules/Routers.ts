import { Router } from "express";
import HtmlController from "./Controllers/HtmlController"
import ResController from "./Controllers/ResController";
import AdminController from "./Controllers/AdminController";
import checkAuth from "./Models/Authorization";


export const v1Routes = (router: Router) => {
    router.get('/api/v1', HtmlController.getMainPage)
        .get('/api/v1/search', ResController.handleSearchParams)
        .get('/api/v1/author/:authorId', HtmlController.getBookPage)

    router.route('/api/v1/book/:id')
        .get(HtmlController.getBookPage)
        .post(ResController.handleWantedBooks)

    router.use("*", HtmlController.getNotFoundPage)
}


export const adminRouter = (router: Router) => {
    router.route('/admin/api/v1')
        .get(checkAuth, HtmlController.getAdminPanel)
        .post(AdminController.addBook)
        .delete(AdminController.deleteBook)

    router.get('/admin/api/v1/migration', AdminController.startMirgation);
}
