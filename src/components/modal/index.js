import { h, Component } from 'preact';
import style from './style';

import YouTube from 'react-youtube';

export default class Modal extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false,
        }
    }

    render({ showModal, interviewee, handleModal }) {
        return(
            showModal ?
            <div class={style.modal__container}>
                <div class={style.modal__box__container}>
                    <span class={style.modal__box__close__btn} onClick={() => handleModal()}></span>
                    <YouTube videoId={interviewee.videoId} />
                    <p class={style.modal__box__text}>{interviewee.text}</p>
                </div>
            </div>
            :
            ''
        )
    }
}