import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import styles from './styles';

const ChosenItemChip = (props) => {
  const [isHovered, toggleHover] = useState(false);

  const { classes, label, filterKey, emitUnchooseValue } = props;

  return (
    <div
      onClick={() => {
        emitUnchooseValue({ filterKey, value: label });
      }}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      className={classes.ChosenItemChipWrapper}
    >
      <Chip className={classes.ChosenItemChip} label={label} />
      {isHovered && <ClearIcon className={classes.ClearIcon} />}
    </div>
  );
};

export default withStyles(styles)(ChosenItemChip);
