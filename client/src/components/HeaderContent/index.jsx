import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import { Link } from 'react-router-dom';

import { routesVocabulary } from '@/pages';

import logoIconImg from '@/public/logo-icon.png';

const styles = theme => ({
  root: {
    width: '100%',
    marginLeft: -24,
  },
  appLogo: {
    display: 'flex',
    alignItems: 'center',
  },
  appLogoImg: {
    height: '73px',
  },
  appLogoText: {
    marginTop: '24px',
    color: theme.palette.primary.main,
  },
  grow: {
    flexGrow: 1,
  },
  navItems: {
    marginTop: 10,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem
          component={Link}
          to={routesVocabulary.SETTINGS_PAGE.name}
          onClick={this.handleMenuClose}
        >
          Настройки
        </MenuItem>
        <MenuItem
          component={Link}
          to={routesVocabulary.STATISTICS_PAGE.name}
          onClick={this.handleMenuClose}
        >
          Статистика
        </MenuItem>
        <MenuItem
          component={Link}
          to={routesVocabulary.LOGIN_PAGE.name}
          onClick={this.handleMenuClose}
        >
          Выйти
        </MenuItem>
      </Menu>
    );
    return (
      <div className={classes.root}>
        <AppBar elevation={0} color="inherit" position="static">
          <Toolbar>
            <Typography color="primary" className={classes.title} variant="h5" noWrap>
              <Link to={routesVocabulary.COLLECTIONS_WORLD_PAGE.name}>
                <div className={classes.appLogo}>
                  <span className={classes.appLogoText}>Teacollect</span>
                  <img className={classes.appLogoImg} src={logoIconImg} alt="logo" />
                </div>
              </Link>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.navItems}>
              <Button component={Link} to={routesVocabulary.COLLECTIONS_MY_TRIED_PAGE.name}>
                <Typography color="secondary" variant="subtitle1" noWrap>
                  Коллекции
                </Typography>
              </Button>
              <Button component={Link} to={routesVocabulary.ARTICLES_ALL_PAGE.name}>
                <Typography color="secondary" variant="subtitle1" noWrap>
                  Статьи
                </Typography>
              </Button>
              <Button component={Link} to={routesVocabulary.GROUPS_ALL_PAGE.name}>
                <Typography color="secondary" variant="subtitle1" noWrap>
                  Чайные клубы
                </Typography>
              </Button>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);
