import { Router } from 'express';
import checkTokensMiddleware from '../middlewares/checkTokens';
import authRouter from './auth';
import categoryRouter from './category';
import recordRouter from './record';
import userCategoryRouter from './user-category';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/category', categoryRouter);
apiRouter.use('/record', recordRouter);
apiRouter.use('/user/category', userCategoryRouter);
// apiRouter.use('/auth', authRouter);

export default apiRouter;
