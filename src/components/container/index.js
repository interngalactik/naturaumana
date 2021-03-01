import style from './style';
import { isMobile } from 'react-device-detect';

const Container = ({ children }) => (
  <div class={isMobile ? style.mobile__container : style.container}>
    {children}
  </div>
);

export default Container;
