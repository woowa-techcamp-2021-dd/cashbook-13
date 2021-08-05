import { Router } from 'express';
import {
	getDefaultCategoriesController,
	createCategoryController,
} from '../../controllers/category.controller';

const categoryRouter = Router();

categoryRouter.get('/categories/default', getDefaultCategoriesController);
categoryRouter.post('/create', createCategoryController);

export default categoryRouter;
