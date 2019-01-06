const create = require('./create');

module.exports = {
  Query: {
    teaTypes: async (obj, args, context, info) => {
      const { TeaType } = context.models;
      const types = await TeaType.find();

      return types;
    },
  },
  Mutation: {
    createTeaType: async (obj, args, context, info) => {
      const teaType = await create(args, context);
      return teaType;
    },
  },
};
