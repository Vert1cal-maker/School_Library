
import { pagination } from "./Types";

function calculatePagination(page: number = 0, itemsPerPage: number, total: number): pagination {

    const nextPage = page + 1;
    const prevPage = page - 1;
    return { currentPage: page, prevPage, nextPage, totalBooks: total, itemsPerPage: itemsPerPage };
}

export default calculatePagination;
