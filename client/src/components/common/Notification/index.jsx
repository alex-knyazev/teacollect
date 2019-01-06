import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';

import Content from './Content';

const Notification = props => {
  const {
    isOpen, handleClose, variant, message,
  } = props;
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Content onClose={handleClose} variant={variant} message={message} />
      </Snackbar>
    </div>
  );
};

export default Notification;
