import React from 'react';
import { connect } from 'react-redux';
import { notificationShowAC } from '@/actionCreators/notification';

import Component from '@/components/common/Notification';

const NotificationCont = props => {
  const { notification } = props;
  const { message, variant } = notification;
  const isOpen = Boolean(message);
  return <Component isOpen={isOpen} variant={variant} message={message} />;
};

const mapStateToProps = state => ({
  notification: state.notification,
});

const mapDispatchToProps = {
  notificationShowAC,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationCont);
