import { where } from "sequelize";
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
    const restaurants = await prisma.restaurants.findMany({
      include: {
        Comments: {
          include: {
            Users: {
              select: { id: true, username: true }
            }
          }
        },
        Likes: {
          include: {
            Users: {
              select: { id: true, username: true }
            }
          }
        }
      }
    });

    return restaurants;
  },

  findOne: async (req) => {
    const { id } = req.params;
    const restaurantId = parseInt(id);

    const restaurant = await prisma.restaurants.findUnique({
      where: { id: restaurantId },
      include: {
        Comments: {
          include: {
            Users: {
              select: { id: true, username: true }
            }
          }
        },
        Likes: {
          include: {
            Users: {
              select: { id: true, username: true }
            }
          }
        }
      }
    });

    return restaurant;
  },

  update: async (req) => {
    return `This action updates a id: ${req.params.id} restaurant`;
  },

  remove: async (req) => {
    const { id } = req.params;
    const restaurantId = parseInt(id);

    const deletingRestaurant = await prisma.restaurants.delete({
      where: { id: restaurantId }
    });

    return deletingRestaurant;
  },


};