import express from 'express';
import { foodController } from '../controllers/food.controller.js';

const foodRouter = express.Router();

// Tạo món mới
foodRouter.post('/', foodController.create);

// lấy thông tin các món ăn trong table
foodRouter.get('/', foodController.findAll);

// lấy thông tin một món ăn theo id
foodRouter.get('/:id', foodController.findOne);

// cập nhật thông tin một món ăn theo id
foodRouter.patch('/:id', foodController.update);

// xóa một món ăn theo id
foodRouter.delete('/:id', foodController.remove);

export default foodRouter;