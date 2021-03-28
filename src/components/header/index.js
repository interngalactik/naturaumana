import { h, Component } from 'preact';
import { Link, route } from 'preact-router';
import { Text } from 'preact-i18n';
import style from './style';
import DonateButton from '../donateButton';
import { isMobile } from 'react-device-detect';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarFixedAdjust,
} from '@rmwc/top-app-bar';
import { Drawer, DrawerContent } from '@rmwc/drawer';
import { List, ListItem } from '@rmwc/list';
import { Icon } from '@rmwc/icon';

import '@rmwc/top-app-bar/styles';
import '@rmwc/drawer/styles';
import '@rmwc/list/styles';
import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      isMenuOpen: false,
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleMenuItem = this.handleMenuItem.bind(this);
  }

  openMenu() {
    this.setState({
      isMenuOpen: true,
    });
  }

  closeMenu() {
    this.setState({
      isMenuOpen: false,
    });
  }

  handleHome() {
    return route('/', true);
  }

  handleMenuItem({ detail }) {
    const { index } = detail;

    this.setState({
      isMenuOpen: false,
    });

    switch (index) {
      case 0:
        return route('/', true);
        break;
      case 1:
        return route('/press', true);
        break;
      case 2:
        return route('/change', true);
        break;
      case 3:
        return route('/docs', true);
        break;
      case 4:
        return window.open(
          'https://shop.sanctuarnima.ro/product-tag/natura-umana/',
          '__blank'
        );
        break;
    }
  }

  render(_, { isMenuOpen }) {
    return (
      <>
        <TopAppBar onNav={this.openMenu} fixed>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <Icon
                icon={{
                  icon: '/assets/icons/naturaUmana_logo.jpg',
                }}
                onClick={this.handleHome}
              />
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              {!isMobile ? (
                <DonateButton
                  btnContainerStyle={style.container__button}
                  btnStyle={style.button}
                />
              ) : (
                ''
              )}
              <TopAppBarNavigationIcon
                icon={
                  isMenuOpen
                    ? '/assets/icons/close_icon.svg'
                    : '/assets/icons/menu_icon.svg'
                }
                onIcon={
                  isMenuOpen
                    ? '/assets/icons/close_icon.svg'
                    : '/assets/icons/menu_icon.svg'
                }
              />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
        <Drawer
          modal
          open={isMenuOpen}
          onClose={this.closeMenu}
          dir="rtl"
          className={isMobile && style.drawer__container}
        >
          <DrawerContent dir="ltr">
            <List onAction={this.handleMenuItem}>
              <ListItem>
                <Text id="header.menu.home" />
              </ListItem>
              <ListItem>
                <Text id="header.menu.press" />
              </ListItem>
              <ListItem>
                <Text id="header.menu.change" />
              </ListItem>
              <ListItem>
                <Text id="header.menu.docs" />
              </ListItem>
              <ListItem>
                <Text id="header.menu.shop" />
              </ListItem>
            </List>
            <div className={style.drawer__footer}>
              <img
                src="/assets/icons/naturaumana_icon_192x192.png"
                alt="natura umana logo"
              />
              <br />
              <p>Contact</p>
              <br />
              <a href="mailto:naturaumanafilm@gmail.com">
                naturaumanafilm@gmail.com
              </a>
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
}
