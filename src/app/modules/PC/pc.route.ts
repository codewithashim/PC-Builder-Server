import express from 'express';
import { PCController } from './pc.controller';
import validateRequest from '../../middlesWare/validateUserRequest';
import { PCValidation } from './pc.validation';

const router = express.Router();

router.get('/', PCController.getALLPC);
router.post(
  '/',
  validateRequest(PCValidation.createPCZodSchema),
  PCController.createPC
);
router.get('/category',PCController.getByCategoryPC)
router.get('/:id', PCController.getSinglePC);
router.delete('/:id', PCController.deletePC);

export const PCRouter = router;


