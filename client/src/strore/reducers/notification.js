const initialState = {
  message: '',
  variant: '',
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'NOTIFICATION_SHOW':
      return {
        ...state,
        ...payload,
      };
    case 'NOTIFICATION_HIDE':
      return {
        ...state,
        message: '',
        variant: '',
      };
    default:
      return state;
  }
}
