import actionsTypes from '@/constants/actionsTypes';

const initialState = {
  chosenCollectionType: 'мои коллекции',
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.COLLECTION_TYPE_CHANGE:
      return {
        ...state,
        chosenCollectionType: payload,
      };
    default:
      return state;
  }
}
