import { ErrorRequestHandler } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const apiErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
	if (req.app.get('env') == 'development') {
		console.log(err);
		return res.status(err.status).json(err);
	} else {
		return res.status(err.status).json(err.publicVersion());
	}
};
