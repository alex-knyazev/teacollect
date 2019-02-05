import { withStyles } from '@material-ui/core';
import TeaCard from './TeaCard';

const teas = [
  {
    id: '1',
    name: 'AAA',
    image: {
      src:
        'https://www.tea-terra.ru/wp-content/uploads/2014/03/2014_03_11_07_002.jpg',
      title: 'tea',
    },
    translatedName: 'Лун Цзин',
    translatedSecondName: 'Колодец лунного дракона',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '2',
    name: 'BBB',
    image: {
      src:
        'https://sc02.alicdn.com/kf/HTB1pm9rKVXXXXXaXpXXq6xXFXXXc/Chinese-Yunnan-menghai-puer-tea-100g-the.jpg',
      title: 'tea',
    },
    translatedName: 'Чао Гао',
    translatedSecondName: 'Машонка вонючего слона',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '3',
    name: 'ССС',
    image: {
      src:
        'http://o-chae.com/uploads/posts/2013-07/1373293622_chinese-white-tea.jpg',
      title: 'tea',
    },
    translatedName: 'Хуя Пуя',
    translatedSecondName: 'Убрали китаезу',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '4',
    name: 'ССС',
    image: {
      src:
        'https://static-eu.insales.ru/files/1/3403/1207627/original/serebr-brovi-red-tea.jpg',
      title: 'tea',
    },
    translatedName: 'Хуя Пуя',
    translatedSecondName: 'Убрали китаезу',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '5',
    name: 'AAA',
    image: {
      src:
        'https://www.tea-terra.ru/wp-content/uploads/2014/03/2014_03_11_07_002.jpg',
      title: 'tea',
    },
    translatedName: 'Лун Цзин',
    translatedSecondName: 'Колодец лунного дракона',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '6',
    name: 'BBB',
    image: {
      src:
        'https://sc02.alicdn.com/kf/HTB1pm9rKVXXXXXaXpXXq6xXFXXXc/Chinese-Yunnan-menghai-puer-tea-100g-the.jpg',
      title: 'tea',
    },
    translatedName: 'Чао Гао',
    translatedSecondName: 'Машонка вонючего слона',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '7',
    name: 'ССС',
    image: {
      src:
        'http://o-chae.com/uploads/posts/2013-07/1373293622_chinese-white-tea.jpg',
      title: 'tea',
    },
    translatedName: 'Хуя Пуя',
    translatedSecondName: 'Убрали китаезу',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '8',
    name: 'ССС',
    image: {
      src:
        'https://static-eu.insales.ru/files/1/3403/1207627/original/serebr-brovi-red-tea.jpg',
      title: 'tea',
    },
    translatedName: 'Хуя Пуя',
    translatedSecondName: 'Убрали китаезу',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '9',
    name: 'AAA',
    image: {
      src:
        'https://www.tea-terra.ru/wp-content/uploads/2014/03/2014_03_11_07_002.jpg',
      title: 'tea',
    },
    translatedName: 'Лун Цзин',
    translatedSecondName: 'Колодец лунного дракона',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '10',
    name: 'BBB',
    image: {
      src:
        'https://sc02.alicdn.com/kf/HTB1pm9rKVXXXXXaXpXXq6xXFXXXc/Chinese-Yunnan-menghai-puer-tea-100g-the.jpg',
      title: 'tea',
    },
    translatedName: 'Чао Гао',
    translatedSecondName: 'Машонка вонючего слона',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '11',
    name: 'ССС',
    image: {
      src:
        'http://o-chae.com/uploads/posts/2013-07/1373293622_chinese-white-tea.jpg',
      title: 'tea',
    },
    translatedName: 'Хуя Пуя',
    translatedSecondName: 'Убрали китаезу',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
  {
    id: '12',
    name: 'ССС',
    image: {
      src:
        'https://static-eu.insales.ru/files/1/3403/1207627/original/serebr-brovi-red-tea.jpg',
      title: 'tea',
    },
    translatedName: 'Хуя Пуя',
    translatedSecondName: 'Убрали китаезу',
    brewingTime: [10],
    temperature: [10],
    brewingAmount: [10],
    grams: [10],
  },
];

const Teas = (props) => {
  const { classes } = props;
  return (
    <div className={classes.Root}>
      {teas.map((tea) => {
        return (
          <div key={tea.id}>
            <TeaCard data={tea} />
          </div>
        );
      })}
    </div>
  );
};

const classes = {
  Root: {
    marginTop: 20,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 350px)',
    gridColumnGap: '20px',
    gridRowGap: '14px',
  },
};

export default withStyles(classes)(Teas);
