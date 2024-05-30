import {ICarsWithAuth} from "./ICarsWithAuth";

export interface ICarPaginatedModel{
    total_items: number;
    total_pages: number;
    prev: string;
    next: string;
    items: ICarsWithAuth[];
}