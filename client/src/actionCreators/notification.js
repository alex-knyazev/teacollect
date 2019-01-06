import actionsTypes from '@/constants/actionsTypes';

export const notificationHideAC = () => ({
  type: actionsTypes.NOTIFICATION_HIDE,
});

export const notificationShowAC = ({ message, variant }) => dispatch => {
  dispatch({
    type: actionsTypes.NOTIFICATION_SHOW,
    payload: {
      message,
      variant,
    },
  });
};

export const notificationGraphQLErrorShow = error => ({
  type: actionsTypes.NOTIFICATION_SHOW,
  payload: {
    message: error.message,
    variant: 'error',
  },
});
