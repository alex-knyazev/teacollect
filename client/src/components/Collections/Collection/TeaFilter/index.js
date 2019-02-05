import React from 'react';
import { withStyles, FormControl } from '@material-ui/core';

import styles from './styles';
import FilterInput from './FilterInput';
import FilterMenu from './FilterMenu';
import withStore from './withStore';

class TeaFilter extends React.Component {
  state = {
    isMenuOpen: false,
  };

  handleFocusInput = () => {
    this.props.openFilterMenu();
  };

  handleClickOutside = (e) => {
    this.props.closeFilterMenu();
  };

  render() {
    const {
      classes,
      teaFilterState,
      setTeaFilterCurrentTextValue,
      setTempTeaFilterValue,
      unsetTempTeaFilterValue,
    } = this.props;
    return (
      <div className={classes.Root}>
        <div>
          <FilterInput
            teaFilterState={teaFilterState}
            emitUnchooseValue={unsetTempTeaFilterValue}
            emitChange={setTeaFilterCurrentTextValue}
            emitFocus={this.handleFocusInput}
          />
        </div>
        <div>
          {teaFilterState.isFilterMenuOpened && (
            <FilterMenu
              emitAcceptTempFilter={this.props.acceptTempTeaFilter}
              emitUnchooseValue={unsetTempTeaFilterValue}
              teaFilterState={teaFilterState}
              emitChooseValue={setTempTeaFilterValue}
              emitClickOutside={this.handleClickOutside}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withStore(withStyles(styles)(TeaFilter));
