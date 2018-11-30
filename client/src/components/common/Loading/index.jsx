import React from 'react';
import ReactLoading from 'react-loading';

import styles from './index.scss';

const Loading = ({ type = 'spin', color = 'green' }) => (
  <div className={styles.loadingWrapper}>
    <ReactLoading type={type} color={color} height={50} width={50} />
  </div>
);

export default Loading;
