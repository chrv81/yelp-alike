import prisma from "../common/prisma/init.prisma.js";

export const foodService = {
  create: async (req) => {
    const { name, price, image, description, restaurantId, isAvailable } =
      req.body;

    const id = parseInt(restaurantId);

    const newFood = await prisma.food.create({
      data: {
        name,
        price: parseFloat(price),
        image,
        description,
        restaurant_id: id,
        isAvailable,
      },
    });

    return newFood;
  },

  findAll: async (req) => {
    const allFood = await prisma.food.findMany({
      include: {
        Restaurants: true,
      },
    });

    return allFood;
  },

  findOne: async (req) => {
    return `This action returns a id: ${req.params.id} food`;
  },

  update: async (req) => {
    return `This action updates a id: ${req.params.id} food`;
  },

  remove: async (req) => {
    return `This action removes a id: ${req.params.id} food`;
  },
};
