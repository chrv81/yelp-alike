import { where } from "sequelize";
import prisma from "../common/prisma/init.prisma.js";
import { BadResquestException } from "../common/utilities/exception.utility.js";

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

  setLikes: async (req) => {
    const { restaurantId, userId } = req.body;
    const newLike = await prisma.likes.create({
      data: {
        restaurant_id: parseInt(restaurantId),
        user_id: parseInt(userId),
      }
    });

    return newLike;
  },

  deleteLikes: async (req) => {
    const { restaurantId, userId } = req.body;
    const deletedLike = await prisma.likes.deleteMany({
      where: {
        restaurant_id: parseInt(restaurantId),
        user_id: parseInt(userId),
      }
    });

    return deletedLike;
  },

  getLikes: async (req) => {
    const { restaurantId } = req.params;
    
    const likes = await prisma.likes.findMany({
      where: {
        restaurant_id: parseInt(restaurantId),
      },
      include: {
        Users: {
          select: { id: true, username: true }
        }
      },
    });

    return likes;
  },

  addComment: async (req) => {
    const { restaurantId, userId, content, rating } = req.body;

    if (rating < 1 || rating > 5) {
      throw new BadResquestException('Rating must be between 1 and 5');
    }

    const newComment = await prisma.comments.create({
      data: {
        restaurant_id: parseInt(restaurantId),
        user_id: parseInt(userId),
        content,
        rating: parseInt(rating)
      }
    });

    return newComment;
  }
};