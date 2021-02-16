import * as dotenv from 'dotenv';
import express from 'express';
import { routerEmby } from './api/emby';

dotenv.config();

const app = express();

app.disable('x-powered-by');

app.use('/emby', routerEmby);

const port = process.env.PORT || 8096;
app.listen(port, () => {
	console.log('Server started on localhost:' + port + '...');
});
