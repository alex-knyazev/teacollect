import { ApolloProvider } from 'react-apollo';

const teaTypes = ['Черный', 'Зеленый', 'Белый', 'Улун', 'Пуэр', 'Другой'];

const producingCountries = [
  'Китай',
  'Индия',
  'Африка',
  'Россия',
  'Южная Америка',
  'Япония',
  'Корея',
  'Турция',
];

const teaNames = [
  'Определенное небо',
  'Жало пчелы',
  'Лун Цзин',
  'Неопределенное небо',
  'Небесный цветок',
  'Нифритовая херб',
  'Джигурда',
  'Пусть говорят',
  'Давай поженимся',
  'Киселев',
  'Любовная настоечка',
  'Ух бля',
  'Вода не вода',
  'Ужас',
];

const withApollo = (Component) => {
  return (props) => (
    <Component
      {...props}
      teaTypes={teaTypes}
      producingCountries={producingCountries}
      teaNames={teaNames}
    />
  );
};

export default withApollo;
