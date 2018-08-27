import actionsTypes from '@/constants/actionsTypes';

const initialState = {
  data: [],
  isWaiting: false,
  isError: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.COLLECTION_FETCH_REQUEST:
      return {
        ...state,
        isError: false,
        isWaiting: true,
      };
    case actionsTypes.COLLECTION_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isWaiting: false,
        data: payload,
      };
    case actionsTypes.COLLECTION_FETCH_ERROR:
      return {
        ...state,
        isWaiting: false,
        isError: true,
      };
    default:
      return state;
  }
}
