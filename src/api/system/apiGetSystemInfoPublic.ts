import { RequestHandler } from 'express';
import { DataStore } from '../../model/shared/DataStore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const apiGetSystemInfoPublic: RequestHandler = (req, res, next) => {
	res.json(DataStore.systemInfoPublic);
};
