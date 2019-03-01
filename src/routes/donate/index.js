import { h, Component } from 'preact';
import YouTube from 'react-youtube';
import { Text } from 'preact-i18n';
import Survey from '../../components/survey';
import style from './style';

const videoId = 'EoG4Jw5Vs0U';
const videoOptions = {
  playerVars: {
    autoplay: 1,
    controls: 0,
    rel: 0,
    showinfo: 0
  }
};

export default class Donate extends Component {
  constructor() {
    super()

    this.state = {}
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {
    return(
      <div className={style.videoBackground}>
        <div className={style.videoForeground}>
          {/* <YouTube
            videoId={videoId}
            opts={videoOptions}
            className="video-iframe"
            onReady={this._onReady}
            onEnd={this._onEnd}
          /> */}
        </div>
        <Survey />
      </div>
    )
  }
}