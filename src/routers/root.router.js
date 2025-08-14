import express from 'express';
import restaurantRouter from './restaurant.router.js';
import foodRouter from './food.router.js';

const rootRouter = express.Router();

// Mount routers
rootRouter.use('/nhahang', restaurantRouter);
rootRouter.use('/food', foodRouter);

export default rootRouter;
