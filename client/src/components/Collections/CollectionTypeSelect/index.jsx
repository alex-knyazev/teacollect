import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabRoot: {
    textTransform: 'initial',
    borderRadius: '10px',
  },
  tabLabelContainer: {
    padding: 0,
  },
});

const CollectionTypeSelect = props => {
  const { allCollectionTypes, chosenCollectionType, handleChangeCollectionType } = props;
  const { classes } = props;

  return (
    <div>
      <Tabs
        classes={{
          indicator: classes.tabsIndicator,
          labelContainer: classes.tabLabelContainer,
        }}
        value={chosenCollectionType}
        onChange={handleChangeCollectionType}
      >
        {allCollectionTypes.map(type => (
          <Tab
            component={Link}
            to={type.route}
            classes={{ root: classes.tabRoot, labelContainer: classes.tabLabelContainer }}
            value={type.value}
            key={type.value}
            label={(
              <Typography color="secondary" variant="subtitle1" noWrap>
                {type.label}
              </Typography>
)}
          />
        ))}
      </Tabs>
    </div>
  );
};
export default withStyles(styles)(CollectionTypeSelect);
