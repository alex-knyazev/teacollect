import { withStyles } from '@material-ui/core';
import CollectionSelect from './CollectionSelect';
import Collection from './Collection';

const Collections = (props) => {
  const { classes } = props;
  return (
    <div className={classes.Root}>
      <CollectionSelect />
      <Collection />
    </div>
  );
};

const styles = (theme) => {
  return {
    Root: {
      marginTop: 4,
      paddingLeft: 24,
      paddingRight: 24,
      display: 'grid',
      gridTemplateRows: 'auto auto',
    },
  };
};

export default withStyles(styles)(Collections);
