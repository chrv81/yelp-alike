export const orderService = {
  create: async (req) => {
    return `This action create`;
  },

  findAll: async (req) => {
    return `This action returns all order`;
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