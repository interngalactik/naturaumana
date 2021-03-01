import { Component } from 'preact';
import Plyr from 'plyr-react';
import { Snackbar, SnackbarAction } from '@rmwc/snackbar';

import '@rmwc/snackbar/styles';
import 'plyr-react/dist/plyr.css';
import style from './style';

const videoId = '4JcbNyqHPR0';

export default class SecretWatch extends Component {
  constructor() {
    super();

    this.state = {
      watch: false,
      password: '',
      sbOpen: false,
      sbMessage: '',
      sbTime: 3000,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === 'password') {
      this.setState({ watch: true });
    } else if (this.state.password === '') {
      this.setState({
        sbOpen: true,
        sbMessage: 'Password missing. Please add the password.',
      });

      setTimeout(() => {
        this.setState({
          sbOpen: false,
        });
      }, this.state.sbTime);
    } else {
      this.setState({
        sbOpen: true,
        sbMessage: 'Password incorrect. Please add the correct one.',
      });

      setTimeout(() => {
        this.setState({
          sbOpen: false,
        });
      }, this.state.sbTime);
    }
  };

  onInput = (e) => {
    const { value } = e.target;
    this.setState({ password: value });
  };

  render(_, { watch, password, sbOpen, sbMessage, sbTime }) {
    const videoSource = {
      type: 'video',
      sources: [
        {
          src: videoId,
          provider: 'youtube',
        },
      ],
    };

    const videoOptions = {
      settings: ['captions', 'quality', 'speed'],
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen',
      ],
    };

    return (
      <div class={style.secret__watch}>
        {!watch && (
          <form onSubmit={this.onSubmit}>
            <input
              type="password"
              label="Password"
              placeholder="Enter code"
              value={password}
              onInput={this.onInput}
            />
            <button type="submit">Submit</button>
          </form>
        )}
        {watch && (
          <div className={style.video__container}>
            <Plyr source={videoSource} />
          </div>
        )}
        <Snackbar
          open={sbOpen}
          message={sbMessage}
          dismissesOnAction
          timeout={sbTime}
          action={
            <SnackbarAction
              label="Dismiss"
              onClick={() => console.log('clicked')}
            />
          }
        />
      </div>
    );
  }
}
