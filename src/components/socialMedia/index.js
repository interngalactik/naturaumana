import { Component } from 'preact';
import style from './style';


const socialMedia = [
    {
        name: 'Facebook',
        imgUrl: '../../assets/icons/icon-fb.png',
        url: 'https://www.facebook.com/NaturaUmanaFilm'
    },
    {
        name: 'YouTube',
        imgUrl: '../../assets/icons/icon-yt.png',
        url: 'https://www.youtube.com/channel/UCcxaL0lUAh1QnFAggx-2NlA'
    },
    {
        name: 'Instagram',
        imgUrl: '../../assets/icons/icon-ig.png',
        url: 'https://www.instagram.com/NaturaUmanaFilm'
    }
]


export default class SocialMedia extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <ul class={style.socialMedia__container}>
                {/* <li class={style.socialMedia__text}>
                    Follow us on:
                </li> */}
                <li>
                    <ul class={style.socialMedia__icons__container}>
                        {
                            socialMedia.map(sm => {
                                return (
                                    <li class={style.socialMedia__icon}>
                                        <a href={sm.url} target="__blank">
                                            <img src={sm.imgUrl} />
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
            </ul>
        )
    }
}