import actionsTypes from '@/constants/actionsTypes';

const initialState = {
  chosenTeaTypes: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.COLLECTION_FILTER_REQUEST:
      return {
        ...state,
        chosenTeaTypes: payload.chosenTeaTypes,
      };
    default:
      return state;
  }
}
