import express from 'express';
import { FourUpRouter, HoursRouter } from './routes';
import { TestController } from './controllers/express/BaseController';
import { errorHandler } from './middleware';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/4up', FourUpRouter);
app.use('/api/hours', HoursRouter);
app.get('/test', TestController);

// Global error handler **should be after all other routes**
app.use(errorHandler);

export default app;
