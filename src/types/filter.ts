import { Category } from "./category";
import { SortBy } from "./sortby";

export default interface Filter {
    category: Category;
    sortBy: SortBy;
}