import React, { Component } from 'react';
import cn from 'classnames';

import clockImg from '@/public/clock.png';
import temperatureImg from '@/public/temperature1.png';
import kettleImg from '@/public/kettle1.png';
import spoonImg from '@/public/spoon.png';
import plusImg from '@/public/plus.png';
import shareImg from '@/public/share.png';

import styles from './index.module.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMenu: false,
    };

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    const { isShowMenu } = this.state;

    this.setState({
      isShowMenu: !isShowMenu,
    });
  }

  render() {
    const { isShowMenu } = this.state;

    const toggleMenuButtonCn = cn({
      [styles.toggleMenuButton]: true,
      [styles.toggleMenuButton_isMenuShown]: isShowMenu,
    });
    const menuWrapperCn = cn({
      [styles.menuWrapper]: true,
      [styles.menuWrapper_isMenuShown]: isShowMenu,
    });

    const { data } = this.props;

    const {
      name, image, translatedNames, brewingTime, temperature, brewingAmount, grams,
    } = data;

    const russian = translatedNames[0];
    const { src, title } = image;
    const bg = `url(${src})`;
    return (
      <div className={styles.card}>
        <div className={styles.backgroundImage} style={{ backgroundImage: bg }} />
        <div className={styles.cardContent}>
          <div className={styles.mainInfo}>
            <div className={styles.names}>
              <h4 className={styles.firstName}>{name}</h4>
              <h5 className={styles.secondName}>{russian.name}</h5>
            </div>
            {isShowMenu && (
              <div className={styles.menu}>
                <ul>
                  <li>
                    <img src={plusImg} alt="Добавить в свою коллекцию" />
                  </li>
                  <li>
                    <img src={shareImg} alt="Поделиться сортом" />
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className={menuWrapperCn}>
            <div
              className={toggleMenuButtonCn}
              onClick={this.openMenu}
              onKeyPress={this.openMenu}
              role="button"
              tabIndex={0}
            >
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <div className={styles.badge} title="Время заварки">
              <span>{brewingTime[0]}</span>
              <img alt="Время заварки" src={clockImg} />
            </div>
            <div className={styles.badge} title="Температура заварки">
              <span>{temperature}</span>
              <img alt="Температура заварки" src={temperatureImg} />
            </div>
            <div className={styles.badge} title="Количество завариваний">
              <span>
                {brewingAmount[0]}
                <span>x</span>
              </span>
              <img alt="Количество завариваний" src={kettleImg} />
            </div>
            <div className={styles.badge} title="Грамм на кружку">
              <span>{grams.join('-')}</span>
              <img alt="Грамм на кружку" src={spoonImg} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {};

export default Card;
