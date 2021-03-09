import { Router } from 'express';
import { apiGetItems } from './apiGetItems';
import { apiGetItemsCounts } from './apiGetItemsCounts';

export const itemsRouter = Router();

itemsRouter.route('/Counts').get(apiGetItemsCounts);
itemsRouter.route('/').get(apiGetItems);
