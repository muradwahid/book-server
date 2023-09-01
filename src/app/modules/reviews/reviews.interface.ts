import { Model, Types } from "mongoose";
import { IBook } from "../book/book.interface";

export type IReview = {
  review: Array<string>;
  author?:Types.ObjectId | IBook
}
export type ReviewModel=Model<IReview,Record<string,unknown>>