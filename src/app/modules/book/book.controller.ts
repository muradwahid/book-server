import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { BookService } from './book.service';
import { filterableField, paginationFields } from './book.constant';

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const filterData: Record<string, unknown> = {};
    const paginationOptions:Record<string,unknown> ={};
    for (const key of filterableField) {
      if (query && Object.hasOwnProperty.call(query, key)) {
        filterData[key] = query[key];
      }
    }
    for (const key of paginationFields) {
      if (query && Object.hasOwnProperty.call(query, key)) {
        paginationOptions[key] = query[key];
      }
    }
    const result = await BookService.getAllBooks(filterData,paginationOptions)
      res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        success: true,
        message: 'Books retrived successfully',
        meta: result.meta,
        data: result.data,
      });
  } catch (error) {
    console.log(error)
  }
};

const createBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;
    const result = await BookService.createBook(book);
    console.log(book);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book added successfully !',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const singleBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BookService.singleBook(id);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const result = await BookService.updateBook(id, updateData);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book update successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BookService.deleteBook(id);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book deleted successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const BookController = {
  getAllBooks,
  createBook,
  singleBook,
  updateBook,
  deleteBook,
};
