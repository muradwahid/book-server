import { SortOrder } from 'mongoose';
import { paginationHelper } from '../../../paginationHelper/paginationHelper';
import { searchableField } from './book.constant';
import { IBook, IFilter, IOptionsResult, IPaginationOptions } from './book.interface';
import { Book } from './book.model';

const getAllBooks = async (
  filterData: IFilter,
  paginationOptions: IPaginationOptions
) => {
  const { searchTerm, ...filter } = filterData;
  const andCondition = [];
  if (searchTerm) {
    andCondition.push({
      $or: searchableField.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }
  if (Object.keys(filter).length) {
    andCondition.push({
      $and: Object.entries(filter).map(([field, value]) => {
        [field] = value;
      }),
    });
  }
  const {page,limit,skip,sortBy,sortOrder}=paginationHelper.paginationCalculate(paginationOptions)
  const sortCondition: { [key: string]: SortOrder } = {};
  sortCondition[sortBy] = sortOrder;
  const whereCondition:any = andCondition?.length > 0 ? { $and: andCondition } : {};
  const result = await Book.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
  const total = await Book.countDocuments();
    return {
      meta: {
        page,
        limit,
        total,
      },
      data: result,
    };
};

const createBook = async (book: IBook): Promise<IBook> => {
  const result = await Book.create(book);
  return result;
};
const singleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};
const updateBook = async (
  id: string,
  updateData: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, updateData, {
    new: true,
  });
  return result;
};
const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findOneAndDelete({ _id: id });
  return result;
};
export const BookService = {
  getAllBooks,
  createBook,
  singleBook,
  updateBook,
  deleteBook,
};
