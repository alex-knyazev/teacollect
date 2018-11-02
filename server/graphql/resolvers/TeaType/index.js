module.exports = {
  Query: {
    teaTypes: (obj, args, context, info) => [
      {
        id: 1,
        name: 'green',
        translatedNames: [{ name: 'Зеленый', language: 'russian' }],
      },
      {
        id: 2,
        name: 'black',
        translatedNames: [{ name: 'Черный', language: 'russian' }],
      },
      {
        id: 3,
        name: 'puer',
        translatedNames: [{ name: 'Пуэр', language: 'russian' }],
      },
      {
        id: 4,
        name: 'oolong',
        translatedNames: [{ name: 'Улун', language: 'russian' }],
      },
      {
        id: 5,
        name: 'white',
        translatedNames: [{ name: 'Белый', language: 'russian' }],
      },
      {
        id: 6,
        name: 'yellow',
        translatedNames: [{ name: 'Желтый', language: 'russian' }],
      },
      {
        id: 7,
        name: 'other',
        translatedNames: [{ name: 'Другой', language: 'russian' }],
      },
    ],
  },
};
