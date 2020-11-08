import { h } from 'preact';
import style from './style';
import DonateButton from '../donateButton';
import { isMobile } from 'react-device-detect';

const Header = () => (
	<header class={style.header}>
		<h1>Natura Umană</h1>
		{
			isMobile ?
			''
			:
			<DonateButton btnContainerStyle={style.container__button} btnStyle={style.button} />
		}
	</header>
);

export default Header;
