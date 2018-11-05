const saveFile = require('../../../utils/saveFile');
const { locationToGeoPoint } = require('../../../utils/locationAdapter');

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

      const { input } = args;

      const { image } = input;
      if (image) {
        const file = await image;

        const { urlToFile, filename } = await saveFile(file);
        input.image = {
          src: urlToFile,
          title: filename,
        };
      }

      const {
        birthplace: { location },
      } = input;
      if (location) {
        const geoPoint = locationToGeoPoint(location);
        input.birthplace.location = geoPoint;
      }

      const tea = new Tea(input);
      await tea.save();
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
