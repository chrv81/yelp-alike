export const restaurantService = {
  create: async (req) => {
    return `This action create`;
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