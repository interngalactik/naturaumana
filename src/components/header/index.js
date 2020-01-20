import { h } from 'preact';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Natura Umană</h1>
		<nav>
			<a href="#">Interviuri</a>
		</nav>
	</header>
);

export default Header;
