import { Router } from 'express';
import { getRecord } from '../../controllers/record.controller';

const recordRouter = Router();

recordRouter.get('/', getRecord);

export default recordRouter;
