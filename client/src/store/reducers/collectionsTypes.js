import actionsTypes from '@/constants/actionsTypes';

const initialState = {
  types: ['мои коллекции', 'мировая коллекция'],
  currentCollectionType: 'мои коллекции',
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.COLLECTION_TYPE_CHANGE:
      return {
        ...state,
        currentCollectionType: payload,
      };
    default:
      return state;
  }
}
