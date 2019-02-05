import { connect } from 'react-redux';

const withStore = (Component) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )((props) => <Component {...props} />);
};

function mapStateToProps(state) {
  return {
    notificationData: state.notification,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    showNotification: ({ message, variant }) => {
      dispatch({
        type: 'NOTIFICATION_SHOW',
        payload: { message, variant },
      });
    },

    hideNotification: () => {
      dispatch({
        type: 'NOTIFICATION_HIDE',
      });
    },
  };
};

export default withStore;
