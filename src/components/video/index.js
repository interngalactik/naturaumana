import { h, Component } from 'preact';
import { Text } from 'preact-i18n';
import style from './style';

import { BrowserView, MobileView } from 'react-device-detect';
import YouTube from 'react-youtube';

import DonateButton from '../../components/donateButton';

import { isMobile } from 'react-device-detect';

const videoId = 'rZGQkuL4oFA';

export default class Video extends Component {
  constructor() {
    super();

    this.state = {};
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  handleFilm() {
    window.open('https://youtu.be/IGwx2ByvSm4', '_blank');
  }

  render() {
    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        loop: 1,
      },
    };

    return (
      <div class={style.video__background}>
        <div>
          <BrowserView>
            <div class={style.video__foreground}>
              <YouTube
                videoId={videoId}
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onEnd={this._onEnd}
              />
            </div>
          </BrowserView>
          <div className={style.container__button__trailer}>
            <button onClick={this.handleFilm}>
              <Text id="home.watchDoc" />
            </button>
          </div>
          <DonateButton
            btnContainerStyle={style.container__button}
            btnStyle={isMobile ? style.button__mobile : style.button}
          />
          <MobileView>
            <div className={style.image__foreground}>
              <img src="/assets/images/poster_web.jpg" alt="natura umana" />
            </div>
          </MobileView>
        </div>
      </div>
    );
  }
}
