import React from 'react';
import { Link } from 'react-router-dom';

import routes from '@/constants/routes';

import logoIconImg from '@/public/logo-icon.png';
import styles from './index.module.scss';

const Header = () => (
  <div className={styles.headerContent}>
    <div>
      <Link to={routes.COLLECTIONS_PAGE}>
        <span>Teacollect</span>
        <img src={logoIconImg} alt="logo" />
      </Link>
    </div>
    <div>
      <button type="button">
        <span>Войти</span>
      </button>
    </div>
  </div>
);

export default Header;
