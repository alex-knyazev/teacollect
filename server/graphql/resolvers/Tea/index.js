import create from './create';

export default {
  Query: {
    teas: async (obj, args, context) => {
      const { Tea } = context.models;
      const teas = await Tea.find().populate('type');
      return teas;
    },
  },
  Mutation: {
    createTea: async (obj, args, context) => {
      const tea = await create(args, context);
      return tea;
    },
  },
};
