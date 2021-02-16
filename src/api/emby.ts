import { Router } from 'express';
import { apiCors } from './general/cors';
import { apiErrorHandler } from './general/errorHandling';
import { logger } from './general/logging';
import { apiValidation } from './general/validation';
import { itemsRouter } from './item/apiItems';
import { systemRouter } from './system/apiSystem';
import { userRouter } from './user/apiUsers';

export const routerEmby = Router();

routerEmby.use(apiCors);
routerEmby.use(logger);
routerEmby.use(apiValidation);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
routerEmby.get('/', (req, res, next) => {
	res.send('Emby REST API data simulator');
});

routerEmby.use('/Items', itemsRouter);
routerEmby.use('/System', systemRouter);
routerEmby.use('/Users', userRouter);

routerEmby.use(apiErrorHandler);
