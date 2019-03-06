import { h, Component } from 'preact';
import YouTube from 'react-youtube';
import { Text } from 'preact-i18n';
import Survey from '../../components/survey';
import style from './style';
import { BrowserView, MobileView } from 'react-device-detect';

const videoId = 'EoG4Jw5Vs0U';
const steps = {
  1: {
    buttons: [
      { 
        title: <Text id="donate.buttons.donate" />,
        link: '',
        increment: 1 
      }
    ]
  },
  2: {
    buttons: [
      { 
        title: <Text id="donate.buttons.monthlyDonation" />,
        link: '',
        increment: 2 
      },
      { 
        title: <Text id="donate.buttons.singleDonation" />,
        link: '',
        increment: 1 
      }
    ]
  },
  3: {
    buttons: [
      { 
        title: 'Go Fund Me',
        link: 'https://www.gofundme.com/naturaumanafilm',
        increment: 0
      },
      { 
        title: 'PayPal',
        link: 'https://www.paypal.me/naturaumanafilm',
        increment: 0
      }
      // { title: 'Revolut', increment: 0 }
    ]
  },
  4: {
    buttons: [
      { 
        title: <Text id="donate.buttons.oneEuro" />,
        link: '',
        increment: 1
      },
      { 
        title: <Text id="donate.buttons.moreEuros" />,
        link: '',
        increment: 2
      }
    ]
  },
  5: {
    buttons: [
      { 
        title: 'teaming',
        link: 'https://www.teaming.net/naturaumanafilm',
        increment: 0
      }
    ]
  },
  6: {
    buttons: [
      { 
        title: 'patreon',
        link: 'https://www.patreon.com/naturaumanafilm',
        increment: 0 
      }
    ]
  }
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
    event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {
    const videoOptions = {
      playerVars: {
        autoplay: true,
        controls: false,
        rel: false,
        showinfo: false,
        volume: true
      }
    };

    return(
      <div className={style.video__background}>
        <BrowserView>
          <div className={style.video__foreground}>
            <YouTube
              videoId={videoId}
              opts={videoOptions}
              className="video-iframe"
              onReady={this._onReady}
              onEnd={this._onEnd}
            />
          </div>
        </BrowserView>
        <MobileView>
          <div className={style.image__foreground}>
            <img src="/assets/images/cover.jpg" alt="human nature" />
          </div>
        </MobileView>
        <div className={style.video__volume} onClick={() => this.handleVolume()}>
          {/* {mute ? <VolumeMuteIcon color="#fff"/> : <VolumeHighIcon color="#fff"/>} */}
        </div>
        <Survey steps={steps} />
      </div>
    )
  }
}