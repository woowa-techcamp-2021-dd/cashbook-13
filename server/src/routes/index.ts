import { Router } from 'express';
import authRouter from './auth';
import categoryRouter from './category';
import recordRouter from './record';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/record', recordRouter);
apiRouter.use('/category', categoryRouter);

export default apiRouter;
