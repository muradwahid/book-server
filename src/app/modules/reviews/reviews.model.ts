import mongoose, { Schema, Types } from 'mongoose';
import { IReview } from './reviews.interface';

const ReviewSchema = new Schema<IReview>({
  review: { type: [] },
  author:{type:Types.ObjectId,ref:'Book'}
});

export const Review = mongoose.model('Review', ReviewSchema);
