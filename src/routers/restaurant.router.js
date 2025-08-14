import express from 'express';

import { restaurantController } from '../controllers/restaurant.controller.js';

const restaurantRouter = express.Router();

// Tạo route CRUD
restaurantRouter.post('/', restaurantController.create);
restaurantRouter.get('/', restaurantController.findAll);

// likes
restaurantRouter.post('/likes', restaurantController.sendLikes);

// unlikes
restaurantRouter.delete('/unlikes', restaurantController.deleteLikes);

// lấy danh sách đánh theo nhà hàng và user
restaurantRouter.get('/likes/:id', restaurantController.getLikes);


restaurantRouter.get('/:id', restaurantController.findOne);
restaurantRouter.patch('/:id', restaurantController.update);
restaurantRouter.delete('/:id', restaurantController.remove);

export default restaurantRouter;