import { Component } from 'preact';
import style from './style';

import { isMobile } from 'react-device-detect';

const teams = [
    {
        members: [
            {
                name: 'directed by',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '3vw',
                    mobile: '5vw'
                },
                link: '',
                word: true
            },
            {
                name: 'Eduard Nistru',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                link: 'https://www.nistru.ro',
                word: false
            },
            {
                name: 'and',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '3vw',
                    mobile: '5vw'
                },
                link: '',
                word: true
            },
            {
                name: 'Diana Musca',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                link: 'https://www.facebook.com/dianamusca07',
                word: false
            }
        ]
    },
    {
        members: [
            {
                name: 'cameras',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '3vw',
                    mobile: '5vw'
                },
                link: '',
                word: true
            },
            {
                name: 'Diana Musca',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                link: 'https://www.facebook.com/dianamusca07',
                word: false
            },
            {
                name: 'Eduard Nistru',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                link: 'https://www.nistru.ro',
                word: false
            },
            {
                name: 'Francois Carreau',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                link: 'https://www.facebook.com/frcarreau/',
                word: false
            }
        ]
    },
    {
        members: [
            {
                name: 'sound design & music',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '3vw',
                    mobile: '5vw'
                },
                link: '',
                word: true
            },
            {
                name: 'Daria Somesan',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                link: 'https://www.youtube.com/user/DariaSplace',
                word: false
            }
        ]
    },
    
    {
        members: [
            {
                name: 'color grading',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '3vw',
                    mobile: '5vw'
                },
                link: '',
                word: true
            },
            {
                name: 'Tobi Heil',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                link: 'https://tobiasheil.de/',
                word: false
            }
        ]
    }
]

export default class Teams extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return(

            <ul class={style.interviews__container, style.interviews__container__team}>
                {
                    teams.map(team => {
                        return (
                            <li class={style.interviewee}>
                                {
                                    team.members.map(member => {
                                        return (
                                            
                                            member.link ?
                                            <a href={member.link} target="_blank" class={style.interviewee__name} style={{ fontSize: isMobile ? member.fontSize.mobile : member.fontSize.browser }}>{member.name}</a>
                                            :
                                            <p class={style.interviewee__word} style={{ fontSize: isMobile ? member.fontSize.mobile : member.fontSize.browser }}>{member.name}</p>
                                        )
                                    })
                                }
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}