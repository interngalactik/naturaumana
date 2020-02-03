import { h, Component } from 'preact';
import style from './style';

import Header from '../../components/header';
import Video from '../../components/video';
import Interviews from '../../components/credits/interviews';
import Teams from '../../components/credits/teams';
import SocialMedia from '../../components/socialMedia';

export default class Home extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return(
			<div class={style.home}>
				<Header />
				<Video />
				<Interviews />
				<Teams />
				<SocialMedia />
			</div>
		)
	}
};
