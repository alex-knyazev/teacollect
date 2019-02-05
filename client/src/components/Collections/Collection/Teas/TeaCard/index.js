import React, { Component } from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/AddRounded';

import styles from './styles';

const clockImg = '/static/teacard/clock.png';
const temperatureImg = '/static/teacard/temperature1.png';
const kettleImg = '/static/teacard/kettle1.png';
const spoonImg = '/static/teacard/spoon.png';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMenu: false,
    };

    this.openMenu = this.openMenu.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  openMenu() {
    const { isShowMenu } = this.state;

    this.setState({
      isShowMenu: !isShowMenu,
    });
  }

  handleCardClick(e) {
    const { id } = this.props.data;
  }

  render() {
    const { isShowMenu } = this.state;
    const { classes } = this.props;

    const ToggleMenuButtonCn = cn({
      [classes.ToggleMenuButton]: true,
      [classes.ToggleMenuButton_isMenuShown]: isShowMenu,
    });
    const ToggleMenuButtonDotCn = cn({
      [classes.Dot]: true,
      [classes.Dot_inOpenMenu]: !isShowMenu,
      [classes.Dot_inCloseMenu]: isShowMenu,
    });
    const MenuWrapperCn = cn({
      [classes.MenuWrapper]: true,
      [classes.MenuWrapper_isMenuShown]: isShowMenu,
    });

    const { data } = this.props;

    const {
      image,
      translatedName,
      translatedSecondName,
      brewingTime,
      temperature,
      brewingAmount,
      grams,
    } = data;

    const { src } = image;
    const bg = `url(${src})`;
    return (
      <div className={classes.Root} onClick={this.handleCardClick}>
        <div
          className={classes.TeaBackgroundImage}
          style={{ backgroundImage: bg }}
        />
        <div className={classes.CardContent}>
          <div className={classes.MainInfo}>
            {/* Add here blur filter */}
            {/* <div className={classes.NamesWrapper}> */}
            <div className={classes.Names}>
              <h4 className={classes.Firstname}>{translatedName}</h4>
              <h5 className={classes.SecondName}>{translatedSecondName}</h5>
              <div className={classes.NamesBackground} />
            </div>
            {/* </div> */}

            {isShowMenu && (
              <div className={classes.Menu}>
                <ul>
                  <li>
                    <AddIcon
                      title="Добавить в коллекцию"
                      className={classes.MenuAddIcon}
                    />
                  </li>
                  <li>
                    <ShareIcon
                      title="Поделиться сортом"
                      className={classes.MenuShareIcon}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className={MenuWrapperCn}>
            <div
              className={ToggleMenuButtonCn}
              onClick={this.openMenu}
              onKeyPress={this.openMenu}
              role="button"
              tabIndex={0}
            >
              <div className={ToggleMenuButtonDotCn} />
              <div className={ToggleMenuButtonDotCn} />
              <div className={ToggleMenuButtonDotCn} />
            </div>
          </div>
          <div className={classes.AdditionalInfo}>
            <div className={classes.Badge} title="Время заварки">
              <span>{brewingTime[0]}</span>
              <img alt="Время заварки" src={clockImg} />
            </div>
            <div className={classes.Badge} title="Температура заварки">
              <span>{temperature}</span>
              <img alt="Температура заварки" src={temperatureImg} />
            </div>
            <div className={classes.Badge} title="Количество завариваний">
              <span>
                {brewingAmount[0]}
                <span>x</span>
              </span>
              <img alt="Количество завариваний" src={kettleImg} />
            </div>
            <div className={classes.Badge} title="Грамм на кружку">
              <span>{grams.join('-')}</span>
              <img alt="Грамм на кружку" src={spoonImg} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Card);
