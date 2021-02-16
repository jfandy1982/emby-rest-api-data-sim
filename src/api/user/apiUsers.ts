import { Router } from 'express';
import { apiGetUsers } from './apiGetUsers';

export const userRouter = Router();

userRouter.route('/').get(apiGetUsers);

// usersRouter.route('/:id').get(apiGetEmbyUserDetail);
