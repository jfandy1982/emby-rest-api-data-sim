import { Router } from 'express';
import { apiGetSystemInfoPublic } from './apiGetSystemInfoPublic';

export const systemRouter = Router();

systemRouter.route('/Info/Public').get(apiGetSystemInfoPublic);
