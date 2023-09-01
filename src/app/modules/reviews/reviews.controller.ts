import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ReviewService } from './reviews.service';

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    const result = await ReviewService.createReview(reviewData);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review create successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllReviews = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ReviewService.getAllReviews(id);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review create successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const ReviewController = {
  createReview,
  getAllReviews,
};
