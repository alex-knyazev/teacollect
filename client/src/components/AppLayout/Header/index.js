import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'next/router';
import { Link } from '@/base/extraRoutes';

import NavButton from './NavButton';
import {
  ALL_NAV_LINKS,
  MAIN_LINKS,
  PROFILE_NAV_LINKS,
  DEFAULT as DEFAULT_LINK,
} from './links';

const LOGO_SRC = '/static/logo4.png';

class HeaderContent extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const {
      classes,
      router: { pathname },
    } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const DesktopMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        {PROFILE_NAV_LINKS.map((link) => {
          return (
            <MenuItem key={link.to} className={classes.DropInMenuItem}>
              <NavButton
                justLink
                link={link}
                isActive={pathname === link.pathname}
              />
            </MenuItem>
          );
        })}
      </Menu>
    );

    const MobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {ALL_NAV_LINKS.map((link) => {
          return (
            <MenuItem key={link.to} className={classes.DropInMenuItem}>
              <NavButton
                justLink
                link={link}
                isActive={pathname === link.pathname}
              />
            </MenuItem>
          );
        })}
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.AppBar} elevation={0} position="static">
          <Toolbar className={classes.Toolbar}>
            <div className={classes.LogoAndTitle}>
              <Link
                href={{
                  pathname: DEFAULT_LINK.pathname,
                  query: DEFAULT_LINK.query,
                }}
              >
                <div>
                  <Typography className={classes.Title} color="inherit" noWrap>
                    Teacollect
                  </Typography>
                  <div className={classes.LogoWrapper}>
                    <img
                      className={classes.LogoImg}
                      alt="logo"
                      src={LOGO_SRC}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className={classes.Grow} />
            <div className={classes.SectionDesktop}>
              {MAIN_LINKS.map((link) => {
                return (
                  <NavButton
                    key={link.to}
                    link={link}
                    isActive={pathname === link.pathname}
                  />
                );
              })}
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.SectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                className={classes.OpenMenuButton}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {DesktopMenu}
        {MobileMenu}
      </div>
    );
  }
}

const styles = (theme) => {
  return {
    root: {
      width: '100%',
    },
    AppBar: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main,
    },
    Toolbar: {
      display: 'flex',
      alignItems: 'center',
    },
    LogoAndTitle: {
      '&>div': {
        // display: 'none',
        display: 'flex',
        alignItems: 'flex-end',
      },
    },
    Title: {
      lineHeight: 1.1,
      fontSize: theme.typography.fontSize * 2,
    },
    LogoWrapper: {
      width: '50px',
    },
    LogoImg: {
      width: '100%',
    },
    Grow: {
      flexGrow: 1,
    },
    ProfileMenuTitle: {
      color: theme.palette.primary.main,
    },
    DropInMenuItem: {
      padding: '0px 0px',
      height: '34px',
      width: 130,
    },
    SectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        paddingTop: '8px',
        display: 'flex',
        alignItems: 'center',
      },
    },
    SectionMobile: {
      display: 'flex',
      marginTop: '14px',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  };
};

export default withRouter(withStyles(styles)(HeaderContent));
