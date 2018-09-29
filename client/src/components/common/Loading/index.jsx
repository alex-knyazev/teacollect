import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type = 'spin', color = 'green' }) => (
  <ReactLoading type={type} color={color} height={50} width={50} />
);

export default Loading;
