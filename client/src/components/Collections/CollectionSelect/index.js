import { withStyles, Tabs, Tab } from '@material-ui/core';
import withStore from './withStore';
import withLogic from './withLogic';

import styles from './styles';

const CollectionSelect = (props) => {
  const { allCollections, chosenCollection, emitChangeCollection } = props;
  const { classes } = props;
  return (
    <div>
      <ul className={classes.CollectionsList}>
        <Tabs
          value={chosenCollection.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, key) => {
            emitChangeCollection(key);
          }}
        >
          {allCollections.map((el) => (
            <Tab
              key={el.value}
              value={el.value}
              className={classes.TabButton}
              classes={{
                labelContainer: classes.labelContainer,
              }}
              label={el.label}
            />
          ))}
        </Tabs>
      </ul>
    </div>
  );
};

export default withStyles(styles)(CollectionSelect) |> withStore |> withLogic;
