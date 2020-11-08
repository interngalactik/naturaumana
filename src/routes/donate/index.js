import { h, Component } from 'preact';
import YouTube from 'react-youtube';
import { Text } from 'preact-i18n';
import Survey from '../../components/survey';
import style from './style';
import { BrowserView, MobileView } from 'react-device-detect';
import Footer from '../../components/footer';
import SocialMedia from '../../components/socialMedia';

const videoId = 'EoG4Jw5Vs0U';
const steps = {
  1: {
    buttons: [
      { 
        title: <Text id="donate.buttons.singleDonation" />,
        link: '',
        increment: 1 
      },
            { 
        title: <Text id="donate.buttons.monthlyDonation" />,
        link: '',
        increment: 2 
      }
    ]
  },
  2: {
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
  3: {
    buttons: [
      { 
        title: <Text id="donate.buttons.oneEuro" />,
        link: 'https://www.teaming.net/naturaumanafilm',
        increment: 0
      },
      { 
        title: <Text id="donate.buttons.moreEuros" />,
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
        volume: true,
        start: 15,
        end: 116,
        loop: 1
      },
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
            <img src="/assets/images/cover.jpg" alt="natura umana" />
          </div>
        </MobileView>
        <div className={style.video__volume} onClick={() => this.handleVolume()}>
          {/* {mute ? <VolumeMuteIcon color="#fff"/> : <VolumeHighIcon color="#fff"/>} */}
        </div>
        <Survey steps={steps} />
        <div className={style.socialMedia}>
          <SocialMedia />
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    )
  }
}