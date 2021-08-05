import { Router } from 'express';
import { addRecord, getRecord } from '../../controllers/record.controller';

const recordRouter = Router();

// recordRouter.get('/', getRecord);
recordRouter.get('/user/records', getRecord);
recordRouter.post('/user/records', addRecord);

export default recordRouter;
