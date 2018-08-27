import React from 'react';
import cn from 'classnames';
import styles from './index.scss';

const Tab = (props) => {
  const { isChosen, text, onClick } = props;

  const events = { onClick };

  const tabClasses = cn({
    [styles.tab]: true,
    [styles.tab_chosen]: isChosen,
  });

  return (
    <div className={tabClasses} {...events}>
      {text}
    </div>
  );
};

export default Tab;
