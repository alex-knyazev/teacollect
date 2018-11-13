export default {
  Query: {
    collectionTypes: (obj, args, context, info) => [
      {
        id: 1,
        names: [
          {
            name: 'Пробовал',
            language: 'russian',
          },
        ],
      },
      {
        id: 2,
        names: [
          {
            name: 'Хочу попробовать',
            language: 'russian',
          },
        ],
      },
      {
        id: 2,
        names: [
          {
            name: 'Мировая коллеция',
            language: 'russian',
          },
        ],
      },
    ],
  },
};
