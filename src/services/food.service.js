export const foodService = {
   create: async (req) => {
      return `This action create`;
   },

   findAll: async (req) => {
      return `This action returns all food`;
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