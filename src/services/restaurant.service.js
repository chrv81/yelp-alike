import prisma from "../common/prisma/init.prisma.js";

export const restaurantService = {
  create: async (req) => {
    const { name, cuisine, address } = req.body;

    const newRestaurant = await prisma.restaurants.create({
      data: {
        name,
        cuisine,
        address,
        createAt: new Date()
      }
    });

    return newRestaurant;
  },

  findAll: async (req) => {
    return `This action returns all restaurant`;
  },

  findOne: async (req) => {
    return `This action returns a id: ${req.params.id} restaurant`;
  },

  update: async (req) => {
    return `This action updates a id: ${req.params.id} restaurant`;
  },

  remove: async (req) => {
    return `This action removes a id: ${req.params.id} restaurant`;
  },
};