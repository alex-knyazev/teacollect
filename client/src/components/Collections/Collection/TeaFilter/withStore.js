import { connect } from 'react-redux';

const withStore = (Component) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )((props) => <Component {...props} />);
};

function mapStateToProps(state) {
  return {
    teaFilterState: state.teaFilter,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTempTeaFilterValue: ({ filterKey, value }) => {
      dispatch({
        type: 'SET_TEMP_TEA_FILTER_FIELD',
        payload: { filterKey, value },
      });
    },

    unsetTempTeaFilterValue: ({ filterKey, value }) => {
      dispatch({
        type: 'UNSET_TEMP_TEA_FILTER_FIELD',
        payload: { filterKey, value },
      });
    },

    setTeaFilterCurrentTextValue: (value) => {
      dispatch({
        type: 'SET_TEA_FILTER_CURRENT_TEXT_VALUE',
        payload: value,
      });
    },

    acceptTempTeaFilter: () => {
      dispatch({
        type: 'ACCEPT_TEMP_TEA_FILTER',
      });
    },

    openFilterMenu: () => {
      dispatch({
        type: 'OPEN_FILTER_MENU',
      });
    },
    closeFilterMenu: () => {
      dispatch({
        type: 'CLOSE_FILTER_MENU',
      });
    },
  };
};

export default withStore;
