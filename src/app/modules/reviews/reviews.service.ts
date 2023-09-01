import { IReview } from './reviews.interface';
import { Review } from './reviews.model';

const createReview = async (
  reviewData: IReview
): Promise<IReview | null | unknown> => {
  const restReview = await Review.findOne({ author: reviewData.author })
  let result;
  if (!restReview) {
    result = await Review.create(reviewData);
  } else {
    result = await Review.updateOne(
      { author: restReview.author },
      {$push:{review:reviewData.review}},
      { new: true }
    );
  }
  return result;
};
const getAllReviews = async (id: string) => {
  const result = await Review.findOne({ author: id });
  return result
}
export const ReviewService = {
  createReview,
  getAllReviews,
};
