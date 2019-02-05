import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import cn from 'classnames';

const SectionItem = (props) => {
  const { classes, emitChooseValue, emitUnchooseValue, isChosen } = props;

  return (
    <li
      onClick={() => {
        if (isChosen) {
          emitUnchooseValue();
        } else {
          emitChooseValue();
        }
      }}
      className={classes.Item}
    >
      <Typography className={isChosen ? classes.ChosenLabel : ''}>
        {props.title}
      </Typography>
    </li>
  );
};

const styles = (theme, a, b) => {
  const hoverColor = theme.palette.action.hover;
  const disabledColor = theme.palette.action.disabledBackground;
  return {
    Item: {
      padding: '8px 34px 8px 8px',
      cursor: 'pointer',
      display: 'flex',
      position: 'relative',
      '&:hover': {
        backgroundColor: hoverColor,
      },
    },
    ChosenLabel: {
      'text-shadow': '-0.06ex 0 black',
    },
  };
};

// onClick={props.handleChooseItem(props.title)}
export default withStyles(styles)(SectionItem);
