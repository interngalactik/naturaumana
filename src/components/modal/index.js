import { h, Component } from 'preact';
import style from './style';

import YouTube from 'react-youtube';

import { isMobile, isTablet } from 'react-device-detect';

export default class Modal extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false,
        }
    }

    render({ showModal, interviewee, handleModal }) {
        const videoOptions = {
			playerVars: {
			  controls: 0,
			  rel: 0,
			  showinfo: 0
			},
          }
          
        return(
            showModal ?
            <div class={style.modal__container}>
                <div class={style.modal__box__container}>
                    <span class={style.modal__box__close__btn} onClick={() => handleModal()}></span>
                    <YouTube 
                        containerClassName={style.player__container} 
                        videoId={interviewee.videoId} 
                        opts={videoOptions}
                    />
                    {
                        isMobile && !isTablet ?
                        ''
                        :
                        <p class={style.modal__box__text}>{interviewee.text}</p>
                    }
                </div>
            </div>
            :
            ''
        )
    }
}