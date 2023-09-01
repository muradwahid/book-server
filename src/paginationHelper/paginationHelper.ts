import { IOptionsResult, IPaginationOptions } from "../app/modules/book/book.interface";

const paginationCalculate = (options: IPaginationOptions): IOptionsResult => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 10);
  const skip: number = (page - 1) * limit;
  const sortBy: string = options.sortBy || 'createdAt';
  const sortOrder = options.sortOrder || 'desc';
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export const paginationHelper = {
  paginationCalculate
}