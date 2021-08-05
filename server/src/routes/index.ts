import { Router } from 'express';
import checkTokensMiddleware from '../middlewares/checkTokens';
import authRouter from './auth';
import categoryRouter from './category';
import recordRouter from './record';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/category', checkTokensMiddleware, categoryRouter);
apiRouter.use('/record', checkTokensMiddleware, recordRouter);
// apiRouter.use('/auth', authRouter);

export default apiRouter;
