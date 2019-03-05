import { h, Component } from 'preact';
import YouTube from 'react-youtube';
import { Text } from 'preact-i18n';
import Survey from '../../components/survey';
import style from './style';
import VolumeHighIcon from 'mdi-preact/VolumeHighIcon';
import VolumeMuteIcon from 'mdi-preact/VolumeMuteIcon';

const videoId = 'EoG4Jw5Vs0U';
window.YTConfig = {
  host: 'https://www.youtube.com'
}

export default class Donate extends Component {
  constructor() {
    super()

    this.state = {
      mute: false
    }
  }

  handleVolume() {
    this.setState({
      mute: !this.state.mute
    })
    console.log(this.state.mute);
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {
    const { mute } = this.state;
    const videoOptions = {
      playerVars: {
        autoplay: true,
        controls: false,
        rel: false,
        showinfo: false,
        volume: true,
        mute: mute
      }
    };

    return(
      <div className={style.video__background}>
        <div className={style.video__foreground}>
          <YouTube
            videoId={videoId}
            opts={videoOptions}
            className="video-iframe"
            onReady={this._onReady}
            onEnd={this._onEnd}
          />
        </div>
        <div className={style.video__volume} onClick={() => this.handleVolume()}>
          {this.state.mute ? <VolumeMuteIcon color="#fff"/> : <VolumeHighIcon color="#fff"/>}
        </div>
        <Survey />
      </div>
    )
  }
}