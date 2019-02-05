import { connect } from 'react-redux';

const withStore = (Component) => {
  return connect(
    null,
    mapDispatchToProps,
  )((props) => <Component {...props} />);
};

const mapDispatchToProps = (dispatch) => {
  return {
    showNotification: ({ message, variant }) => {
      dispatch({
        type: 'NOTIFICATION_SHOW',
        payload: { message, variant },
      });
    },
  };
};

export default withStore;
