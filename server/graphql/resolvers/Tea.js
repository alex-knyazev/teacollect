module.exports = {
  Query: {
    teas: (obj, args, context, info) => {
      return [
        {
          id: 1,
          type: 'green',
          name: 'Лун Цзин',
          translatedNames: [{ name: 'Колодец Дракона', language: 'russian' }],
          image: {
            src:
              'https://www.tea-dolina.ru/1171-tm_large_default/lun-czin-kolodec-drakona-premium.jpg',
            title: 'Лун Цзин',
          },
          birthPlace: {
            coordinates: {
              lat: 54,
              lng: -10,
            },
            name: 'Дзео',
          },
          brewingTime: [3],
          temperature: [75],
          brewingAmount: [3],
          grams: [4, 7],
        },
        {
          id: 2,
          type: 'white',
          name: 'Бай Му Дань',
          translatedNames: [{ name: 'Белая обезьяна', language: 'russian' }],
          image: {
            src:
              'http://china-garden.ru/wa-data/public/shop/products/53/13/1353/images/429/429.750.jpg',
            title: 'Белая обезьяна',
          },
          birthPlace: {
            coordinates: {
              lat: 54,
              lng: -10,
            },
            name: 'Дзео',
          },
          brewingTime: [5],
          temperature: [80],
          brewingAmount: [4],
          grams: [4, 7],
        },
        {
          id: 3,
          type: 'puer',
          name: 'Шу гунтин',
          translatedNames: [{ name: 'Дворцовый', language: 'russian' }],
          image: {
            src:
              'https://theartoftea.ru/image/cache/catalog/may_18/p1002843-256x256.jpg',
            title: 'Шу гунтин',
          },
          birthPlace: {
            coordinates: {
              lat: 54,
              lng: -10,
            },
            name: 'Дзео',
          },
          brewingTime: 5,
          temperature: 80,
          brewingAmount: 4,
          grams: [4, 7],
        },
      ];
    },
  },
};
