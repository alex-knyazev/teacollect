import { ApolloProvider } from 'react-apollo';

const allCollections = [
  {
    label: 'Всемирная коллекция',
    value: 'all',
  },
  {
    label: 'Пробовал',
    value: 'tried',
  },
  {
    label: 'Хочу попробовать',
    value: 'want',
  },
];

const withStore = (Component) => {
  return (props) => <Component {...props} allCollections={allCollections} />;
};

export default withStore;
