module.exports = {
  Query: {
    teaTypes: (obj, args, context, info) => {
      return [
        {
          id: 1,
          names: [{name: 'Зеленый', language: 'russian'}],
        },
        {
          id: 2,
          names: [{name: 'Черный', language: 'russian'}],
        },
        {
          id: 3,
          names: [{name: 'Пуэр', language: 'russian'}],
        },
        {
          id: 4,
          names: [{name: 'Улун', language: 'russian'}],
        },
        {
          id: 5,
          names: [{name: 'Белый', language: 'russian'}],
        },
        {
          id: 6,
          names: [{name: 'Желтый', language: 'russian'}],
        },
        {
          id: 7,
          names: [{name: 'Другой', language: 'russian'}],
        },
      ];
    },
  },
};
