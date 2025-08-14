export const restaurantService = {
  create: async function (req) {
    return `This action create`;
  },

  findAll: async function (req) {
    return `This action returns all restaurant`;
  },

  findOne: async function (req) {
    return `This action returns a id: ${req.params.id} restaurant`;
  },

  update: async function (req) {
    return `This action updates a id: ${req.params.id} restaurant`;
  },

  remove: async function (req) {
    return `This action removes a id: ${req.params.id} restaurant`;
  },
};