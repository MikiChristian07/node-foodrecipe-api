import express from 'express';
import pino from 'pino';
import middlewares from './middlewares/index.middlewares.js'

export const logger = pino(); 
const app = express();
const PORT = process.env.PORT || 3000;

middlewares(app);

app.listen(PORT, () => {
    logger.info(`APP is running on port ${PORT}`);
})