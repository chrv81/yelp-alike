import restaurantService from '../services/restaurant.service';

import { responseSuccess } from '../common/utilities/response.utility';

export const restaurantController = {
  create: async function (req, res, next) {
    const result = await restaurantService.create(req);
    const response = responseSuccess(result, `Create restaurant successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async function (req, res, next) {
    const result = await restaurantService.findAll(req);
    const response = responseSuccess(result, `Get all restaurants successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async function (req, res, next) {
    const result = await restaurantService.findOne(req);
    const response = responseSuccess(result, `Get restaurant #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  update: async function (req, res, next) {
    const result = await restaurantService.update(req);
    const response = responseSuccess(result, `Update restaurant #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  remove: async function (req, res, next) {
    const result = await restaurantService.remove(req);
    const response = responseSuccess(result, `Remove restaurant #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },
};