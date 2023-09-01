import express, { Router } from 'express';
import { BookController } from './book.controller';
const router:Router = express.Router();

router.get('/',BookController.getAllBooks)
router.get('/:id',BookController.singleBook)
router.patch('/:id',BookController.updateBook)
router.delete('/:id',BookController.deleteBook);
router.post('/', BookController.createBook);

export const BookRoute = router;
