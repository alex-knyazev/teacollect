import actionsTypes from '@/constants/actionsTypes';

const initialState = {
  message: '',
  variant: '',
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.NOTIFICATION_SHOW:
      return {
        ...state,
        ...payload,
      };
    case actionsTypes.NOTIFICATION_HIDE:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
