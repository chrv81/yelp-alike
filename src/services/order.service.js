import prisma from "../common/prisma/init.prisma";

export const orderService = {
  create: async (req) => {
    const { user_id, food_id, quantity = 1, price } = req.body;
    // lấy thông tin đồ ăn và giá tiền
    const food = await prisma.food.findFirst({
      where: { id: parseInt(food_id) },
    });

    if (!food) {
      throw new Error(`Food with id ${food_id} not found`);
    }

    if (!food.isAvailable) {
      throw new Error(`Food with id ${food_id} is not available`);
    }

    // tạo ỏrder với thông tin đồ ăn
    const newOrder = await prisma.orders.create({
      data: {
        user_id: parseInt(user_id),
        food_id: parseInt(food_id),
        quantity: parseInt(quantity),
        price: parseFloat(price),
        orderBy: new Date(),
      },
    });

    return newOrder;
  },

  findAll: async (req) => {
    const allOrders = await prisma.orders.findMany({
      include: {
        Users: true,
        Food: {
          include: {
            Restaurants: true,
          },
        },
      },
      orderBy: { orderBy: "desc" },
    });

    return allOrders;
  },

  findOne: async (req) => {
    return `This action returns a id: ${req.params.id} order`;
  },

  update: async (req) => {
    return `This action updates a id: ${req.params.id} order`;
  },

  remove: async (req) => {
    return `This action removes a id: ${req.params.id} order`;
  },
};
