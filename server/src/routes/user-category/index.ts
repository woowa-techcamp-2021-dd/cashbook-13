import { Router } from 'express';
import { createUserCategoryController } from '../../controllers/user-category.controller';

const userCategoryRouter = Router();

userCategoryRouter.post('/create', createUserCategoryController);

export default userCategoryRouter;
