import cors from 'cors';
import express, { Application } from 'express';
import { BookRoute } from './app/modules/book/book.route';
import { ReviewRouter } from './app/modules/reviews/reviews.route';
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/book/', BookRoute);
app.use('/api/v1/review/',ReviewRouter);

export default app;
