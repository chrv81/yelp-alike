/* eslint-disable no-unused-vars */
import { restaurantService } from '../services/restaurant.service.js';

import { responseSuccess } from '../common/utilities/response.utility.js';

export const restaurantController = {
  create: async (req, res, next) => {
    const result = await restaurantService.create(req);
    const response = responseSuccess(result, `Create restaurant successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async (req, res, next) => {
    const result = await restaurantService.findAll(req);
    const response = responseSuccess(
      result,
      `Get all restaurants successfully`
    );
    res.status(response.statusCode).json(response);
  },

  findOne: async (req, res, next) => {
    const result = await restaurantService.findOne(req);
    const response = responseSuccess(
      result,
      `Get restaurant #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  update: async (req, res, next) => {
    const result = await restaurantService.update(req);
    const response = responseSuccess(
      result,
      `Update restaurant #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  remove: async (req, res, next) => {
    const result = await restaurantService.remove(req);
    const response = responseSuccess(
      result,
      `Remove restaurant #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  sendLikes: async (req, res, next) => {
    const result = await restaurantService.setLikes(req);
    const { restaurantId, userId } = req.body;
    const response = responseSuccess(
      result,
      `Like restaurant #${restaurantId} successfully by user ${userId}`
    );
    res.status(response.statusCode).json(response);
  },

  deleteLikes: async (req, res, next) => {
    const result = await restaurantService.deleteLikes(req);
    const { restaurantId, userId } = req.body;
    const response = responseSuccess(
      result,
      `Unlike restaurant #${restaurantId} successfully by user ${userId}`
    );
    res.status(response.statusCode).json(response);
  },

  getLikes: async (req, res, next) => {
    const result = await restaurantService.getLikes(req);
    const { restaurantId } = req.params;
    const response = responseSuccess(
      result,
      `Get likes of restaurant #${restaurantId} successfully`
    );
    res.status(response.statusCode).json(response);
  }
};
