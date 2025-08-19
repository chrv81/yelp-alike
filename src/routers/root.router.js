import express from "express";
import restaurantRouter from "./restaurant.router.js";
import foodRouter from "./food.router.js";
import orderRouter from "./order.router.js";

const rootRouter = express.Router();

// Mount routers
rootRouter.use("/nhahang", restaurantRouter);
rootRouter.use("/food", foodRouter);
rootRouter.use("/orders", orderRouter);

export default rootRouter;
