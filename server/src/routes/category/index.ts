import { Router } from 'express';
import { getDefaultCategoriesController } from '../../controllers/category.controller';

const categoryRouter = Router();

categoryRouter.get('/categories/default', getDefaultCategoriesController);

export default categoryRouter;
