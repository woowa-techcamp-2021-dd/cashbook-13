import { Router } from 'express';
import authRouter from './auth';
import recordRouter from './record';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/record', recordRouter);
// apiRouter.use('/auth', authRouter);

export default apiRouter;
