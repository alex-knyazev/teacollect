import React from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function MyButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Just Material UI Button
      </Button>
    </div>
  );
}

export default withStyles(styles)(MyButton);
