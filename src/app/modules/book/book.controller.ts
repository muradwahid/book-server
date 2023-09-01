import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { BookService } from './book.service';

const createBook = async (req: Request, res: Response) => {
  const book = req.body;
  const result = await BookService.createBook(book);
  console.log(book);
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added successfully !',
    data: result,
  });
};
const singleBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookService.singleBook(id);
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrived successfully',
    data: result,
  });
};

export const BookController = {
  createBook,
};
