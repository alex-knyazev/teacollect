const fs = require('fs');

module.exports = {
  Query: {
    teas: async (obj, args, context, info) => {
      const { Tea } = context.models;
      const teas = await Tea.find();

      return teas;
    },
  },
  Mutation: {
    createTea: async (obj, args, context, info) => {
      const { Tea } = context.models;

      const { image } = tea.args;
      const file = await image;

      const tea = new Tea(args.input);

      return tea;
    },
  },
  Tea: {
    type: async (obj, args, context, info) => ({
      id: '123',
      names: [
        {
          name: 'green',
          language: 'english',
        },
      ],
    }),
    image: async (obj, args, context, info) => ({
      src: '123',
      title: '123',
    }),
  },
};
