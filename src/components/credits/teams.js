import { h, Component } from 'preact';
import style from './style';

const teams = [
    {
        members: [
            {
                name: 'directed by',
                text: '',
                videoId: '',
                fontSize: '3vw',
                link: '',
                word: true
            },
            {
                name: 'Diana Musca',
                text: '',
                videoId: '',
                fontSize: '4.5vw',
                link: 'https://www.facebook.com/dianamusca07',
                word: false
            },
            {
                name: 'and',
                text: '',
                videoId: '',
                fontSize: '3vw',
                link: '',
                word: true
            },
            {
                name: 'Eduard Nistru',
                text: '',
                videoId: '',
                fontSize: '4.5vw',
                link: 'https://www.nistru.ro',
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
                fontSize: '3vw',
                link: '',
                word: true
            },
            {
                name: 'Diana Musca',
                text: '',
                videoId: '',
                fontSize: '4.5vw',
                link: 'https://www.facebook.com/dianamusca07',
                word: false
            },
            {
                name: 'Eduard Nistru',
                text: '',
                videoId: '',
                fontSize: '4.5vw',
                link: 'https://www.nistru.ro',
                word: false
            },
            {
                name: 'Francois Carreau',
                text: '',
                videoId: '',
                fontSize: '4.5vw',
                link: 'https://www.facebook.com/frcarreau/',
                word: false
            }
        ]
    },
    {
        members: [
            {
                name: 'music',
                text: '',
                videoId: '',
                fontSize: '3vw',
                link: '',
                word: true
            },
            {
                name: 'Daria Somesan (Cozy Lua)',
                text: '',
                videoId: '',
                fontSize: '4.5vw',
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
                fontSize: '3vw',
                link: '',
                word: true
            },
            {
                name: 'Tobi Heil',
                text: '',
                videoId: '',
                fontSize: '4.5vw',
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

            <ul class={style.interviews__container}>
                {
                    teams.map(team => {
                        return (
                            <li class={style.interviewee}>
                                {
                                    team.members.map(member => {
                                        return (
                                            
                                            member.link ?
                                            <a href={member.link} target="_blank" class={style.interviewee__name} style={{fontSize: member.fontSize}}>{member.name}</a>
                                            :
                                            <p class={style.interviewee__word} style={{fontSize: member.fontSize}}>{member.name}</p>
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