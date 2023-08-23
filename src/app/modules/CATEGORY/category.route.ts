import express from 'express';
import { getALLCategory } from './category.controller';

const router = express.Router();

router.get('/', getALLCategory);

export const CategoryRouter = router;
