import { h, Component } from 'preact';
import style from './style';

import { BrowserView, MobileView } from 'react-device-detect';
import YouTube from 'react-youtube';

import DonateButton from '../../components/donateButton';

import { isMobile } from 'react-device-detect';

const videoId = 'EoG4Jw5Vs0U';

export default class Video extends Component {
    constructor() {
        super();

        this.state = {
			player: null,
			volume: 0,
			play: false
		};

		this._onReady = this._onReady.bind(this);
		this.handleVolume = this.handleVolume.bind(this);
		this.handlePlay = this.handlePlay.bind(this);
    }

    _onReady(event) {
		// access to player in all event handlers via event.target
		this.setState({
			player: event.target
		})
		const { player, volume } = this.state;
		player.setVolume(volume);
	  }
	
	_onEnd(event) {
		event.target.playVideo();
	}

	handleVolume() {
		const { volume, player } = this.state;
		this.setState({
			volume: volume === 0 ? 100 : 0
		});
		player.setVolume(volume === 0 ? 100 : 0);
	}

	handlePlay() {
		const { play, player } = this.state;
		this.setState({
			play: !play
		})
		if (!play) {
			player.playVideo();
		} else {
			player.pauseVideo();
		}
	}

	componentDidMount() {
		this.setState({
			volume: 0
		})
	}

	render() {
		const { volume, play } = this.state;
		const videoOptions = {
			playerVars: {
			  autoplay: true,
			  controls: false,
			  rel: false,
			  showinfo: false,
			  start: 15,
			  end: 116,
			  loop: 1
			},
		  };

		return(
			<div class={style.video__background}>
				<div>
					<div class={style.video__foreground}>
						<YouTube
							videoId={videoId}
							opts={videoOptions}
							className="video-iframe"
							onReady={this._onReady}
							onEnd={this._onEnd}
						/>
					</div>
					<div className={style.video__volume} onClick={() => this.handleVolume()}>
					{
						volume === 0 ? 
							<img src="../../assets/icons/volume_off.png" />
						: 
							<img src="../../assets/icons/volume_up.png" />
					}
					</div>
					{
						isMobile ?
						<div className={style.video__play} onClick={() => this.handlePlay()}>
							{
								play ? 
								<img src="../../assets/icons/pause.png" />
								:
								<img src="../../assets/icons/play.png" />
							}
						</div>
						:
						''
					}
				</div>
				{/* <MobileView>
					<div className={style.image__foreground}>
						<img src="/assets/images/cover.jpg" alt="natura umana" />
					</div>
				</MobileView> */}
				<DonateButton btnContainerStyle={style.container__button} btnStyle={ isMobile ? style.button__mobile : style.button} />
			</div>
		)
	}
}