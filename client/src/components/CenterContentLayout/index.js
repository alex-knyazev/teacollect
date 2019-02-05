import { withStyles } from '@material-ui/core';
import Notification from '@/components/Notification';

const styles = (theme) => {
  return {
    Layout: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
};
const CenterContentLayout = (props) => {
  const { children, classes } = props;

  return (
    <div className={classes.Layout}>
      {children}
      <Notification />
    </div>
  );
};

export default withStyles(styles)(CenterContentLayout);
