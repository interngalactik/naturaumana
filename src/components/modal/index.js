import { h, Component } from 'preact';
import style from './style';

import Plyr from 'plyr-react';

import { isMobile, isTablet } from 'react-device-detect';

export default class Modal extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };
  }

  render({ showModal, interviewee, handleModal }) {
    const videoSource = {
      type: 'video',
      sources: [
        {
          src: interviewee.videoId,
          provider: 'youtube',
        },
      ],
      tracks: [
        {
          kind: 'captions',
          label: 'English',
          srclang: 'en',
          src: '/path/to/captions.en.vtt',
          default: true,
        },
        {
          kind: 'captions',
          label: 'French',
          srclang: 'fr',
          src: '/path/to/captions.fr.vtt',
        },
      ],
    };

    const videoOptions = {
      settings: ['captions', 'quality', 'speed'],
      captions: {
        active: true,
      },
    };

    return showModal ? (
      <div class={style.modal__container}>
        <div class={style.modal__box__container}>
          <span
            class={style.modal__box__close__btn}
            onClick={() => handleModal()}
          ></span>
          <Plyr source={videoSource} options={videoOptions} />
        </div>
      </div>
    ) : (
      ''
    );
  }
}
