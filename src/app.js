import express from 'express';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import statusRouter from './routes/status.routes.js';
import echoRouter from './routes/echo.routes.js';
import quoteRouter from './routes/quote.routes.js';
import productsRouter from './routes/products.routes.js';
import breakRouter from './routes/break.routes.js';

const app = express();

// JSON body (no custom size limit per latest spec)
app.use(express.json());

// Mount routers (under /api/v1/*)
app.use('/api/v1/status', statusRouter);
app.use('/api/v1/echo', echoRouter);
app.use('/api/v1/quote', quoteRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/break', breakRouter);

// Not found + centralized error handler
app.use(notFound);
app.use(errorHandler);

export default app;
