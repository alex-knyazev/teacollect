// here you can add your api caller

async function get() {
  const requestResult = [
    {
      id: 1,
      type: 'green',
      name: 'Лун Цзин',
      translatedName: 'Колодец Дракона',
      image: {
        src: 'https://www.tea-dolina.ru/1171-tm_large_default/lun-czin-kolodec-drakona-premium.jpg',
      },
      timeOfBrewing: 3,
      temperature: 75,
      amountOfBrewing: 3,
      grams: [4, 7],
    },
    {
      id: 2,
      type: 'white',
      name: 'Бай Му Дань',
      translatedName: 'Белая обезьяна',
      image: {
        src:
          'http://china-garden.ru/wa-data/public/shop/products/53/13/1353/images/429/429.750.jpg',
      },
      timeOfBrewing: 5,
      temperature: 80,
      amountOfBrewing: 4,
      grams: [4, 7],
    },
    {
      id: 3,
      type: 'puer',
      name: 'Шу гунтин',
      translatedName: 'Дворцовый',
      image: {
        src: 'https://theartoftea.ru/image/cache/catalog/may_18/p1002843-256x256.jpg',
      },
      timeOfBrewing: 5,
      temperature: 80,
      amountOfBrewing: 4,
      grams: [4, 7],
    },
  ];
  return {
    data: requestResult,
  };
}

const request = {
  get,
};

export default request;
