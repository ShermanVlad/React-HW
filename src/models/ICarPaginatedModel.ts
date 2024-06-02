import {ICarsWithAuth} from "./ICarsWithAuth";
import {IPaginatedPage} from "./IPaginatedPage";

export interface ICarPaginatedModel{
    total_items: number;
    total_pages: number;
    prev: IPaginatedPage | null;
    next: IPaginatedPage | null;
    items: ICarsWithAuth[];
}