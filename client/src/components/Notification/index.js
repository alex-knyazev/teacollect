import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';

import Content from './Content';
import withStore from './withStore';

const Notification = (props) => {
  const {
    // isOpen,
    // showNotification,
    hideNotification,
    notificationData: { variant, message },
  } = props;
  const isOpen = message !== '';

  return (
    isOpen && (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={isOpen}
          autoHideDuration={3000}
          onClose={hideNotification}
        >
          <Content
            onClose={hideNotification}
            variant={variant}
            message={message}
          />
        </Snackbar>
      </div>
    )
  );
};

export default Notification |> withStore;
