import { Text } from 'preact-i18n';
import { isMobile } from 'react-device-detect';
import style from './style';
import SocialMedia from '../socialMedia';

const Footer = () => (
  <footer className={`${style.footer} ${isMobile ? style.mobile__footer : ''}`}>
    <SocialMedia />
    <p>
      <Text id="footer.builtWith" />{' '}
      <img src="../../assets/icons/favorite.png" /> <Text id="footer.by" />{' '}
      <a href="https://www.nistru.ro" target="__blank">
        Eduard Nistru
      </a>
    </p>
  </footer>
);

export default Footer;
