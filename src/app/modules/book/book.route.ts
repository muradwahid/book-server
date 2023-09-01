import express, { Router } from 'express';
import { BookController } from './book.controller';
const router:Router = express.Router();

router.get('/:id',BookController.singleBook)
router.post('/', BookController.createBook);

export const BookRoute = router;
