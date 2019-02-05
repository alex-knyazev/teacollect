const allCollections = [
  {
    label: 'Всемирная коллекция',
    value: 'all',
    queryFilter: '?name=all',
  },
  {
    label: 'Пробовал',
    value: 'tried',
    queryFilter: '?name=trie',
  },
  {
    label: 'Хочу попробовать',
    value: 'want',
    queryFilter: '?name=want',
  },
];

const initCollectionFilterState = {
  value: allCollections[0],
};

function collectionFilter(state = initCollectionFilterState, action) {
  switch (action.type) {
    case 'SET_COLLECTION_FILTER':
      return {
        ...state,
        value: allCollections.find((el) => action.payload === el.value),
      };

    default:
      return state;
  }
}

export default collectionFilter;
