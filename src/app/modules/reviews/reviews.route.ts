import express from 'express';
import { ReviewController } from './reviews.controller';

const router = express.Router();
router.post('/', ReviewController.createReview);
router.get('/:id',ReviewController.getAllReviews);

export const ReviewRouter = router;