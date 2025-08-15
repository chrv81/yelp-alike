import { responseSuccess } from "@/common/utilities/response.utility";
import { orderService } from "@/services/order.service";

export const orderController = {
  create: async (req, res, next) => {
    const result = await orderService.create(req);
    const response = responseSuccess(result, `Create order successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async (req, res, next) => {
    const result = await orderService.findAll(req);
    const response = responseSuccess(result, `Get all orders successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async (req, res, next) => {
    const result = await orderService.findOne(req);
    const response = responseSuccess(result, `Get order #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  update: async (req, res, next) => {
    const result = await orderService.update(req);
    const response = responseSuccess(result, `Update order #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  remove: async (req, res, next) => {
    const result = await orderService.remove(req);
    const response = responseSuccess(result, `Remove order #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },
};