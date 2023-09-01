import { Model, SortOrder } from "mongoose"

export type IBook = {
  title: string;
  author: string;
  genre: string;
  email: string;
  publicationDate: string;
  image?: string;
}
export type IFilter = {
  searchTerm?: string;
  genre?: string;
  year?: string;
}
export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};
export type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder: SortOrder;
};

export type BookModel=Model<IBook,Record<string,unknown>>