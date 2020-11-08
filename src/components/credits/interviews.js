import { h, Component } from 'preact';
import style from './style';

import YouTube from 'react-youtube';
import Modal from '../modal';
import { isMobile } from 'react-device-detect';

const interviews = [
    {
        interviewees: [
            {
                name: 'Starring',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '3vw',
                    mobile: '5vw'
                },
                word: true
            },
            {
                name: 'Paula Seling',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '6vw',
                    mobile: '10vw'
                },
                word: false
            },
            {
                name: 'Deliric',
                text: '"Mi-ar plăcea să devină din ce în ce mai mulți oameni vegani, dar nu cred că poți să o impui... e o schimbare în mentalitate și o să vină la fiecare." - Deliric, artist Hip-Hop',
                videoId: 'gWWvIdyqLtc',
                fontSize: {
                    browser: '6vw',
                    mobile: '10vw'
                },
                word: false
            }
        ]
    },
    {
        interviewees: [
            {
                name: 'Remus Cernea',
                text: 'Remus Cernea ne vorbeşte despre schimbare şi despre empatia faţă de cei care au alte opinii.',
                videoId: 'CfVidVPVSmE',
                fontSize: {
                    browser: '5vw',
                    mobile: '8vw'
                },
                word: false
            },
            {
                name: 'Andrei Rosu',
                text: 'Andrei Rosu, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                videoId: 'mvk7o09s2kE',
                fontSize: {
                    browser: '5vw',
                    mobile: '8vw'
                },
                word: false
            },
            {
                name: 'Marius Mitrache',
                text: 'Marius Mitrache, multiple national champion bodybuilder, explains to us if we can build muscle mass on a plant-based diet.',
                videoId: 'DWcSzjKpDHY',
                fontSize: {
                    browser: '5vw',
                    mobile: '8vw'
                },
                word: false
            },
            {
                name: 'Liviu Deacu',
                text: 'Liviu Deacu, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                videoId: 'UCQAokuasN8',
                fontSize: {
                    browser: '5vw',
                    mobile: '8vw'
                },
                word: false
            }
        ]
    },
    {
        interviewees: [
            {
                name: 'Gigi Ghinea',
                text: 'Gigi Ghinea, psychologist and author, shares her opinion on the link between a post-communism country and eating habits.',
                videoId: 'EyWZvwAA95w',
                fontSize: {
                    browser: '5vw',
                    mobile: '7.5vw'
                },
                word: false
            },
            {
                name: 'Doinea Badea',
                text: 'Doina Badea, the co-founder of the first farm animal sanctuary in Romania, shares her appreciation and love for the kind cuddly giants, the cows. ',
                videoId: 'KlpWbNeyo_w',
                fontSize: {
                    browser: '5vw',
                    mobile: '7.5vw'
                },
                word: false
            },
            {
                name: 'Paul Sandu',
                text: 'Paul Gabriel Sandu, filosof și om politic, ne vorbește despre cultura occidentală și imperativul suferinței de a fi oprită.',
                videoId: 'dsdPZINYwbU',
                fontSize: {
                    browser: '5vw',
                    mobile: '7.5vw'
                },
                word: false
            },
            {
                name: 'Anca Georgescu',
                text: 'Anca Georgescu, director de strategie și comunicare de la TAC medicina veterinara sociala, ne povestește despre câinii singuri și despre cum îi putem ajuta.',
                videoId: 'htCuv9sLoEA',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                word: false
            },
            {
                name: 'Bogdan Gioara',
                text: 'Bogdan Gioară vorbește despre impactul agriculturii zootehnice asupra schimbărilor climatice și incompatibilitatea ei cu vremurile pe care le trăim.',
                videoId: 'huJpw0JHRA8',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                word: false
            }
        ]
    },
    
    {
        interviewees: [
            {
                name: 'Sorin Dumitru',
                text: 'Sorin Dumitru, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                videoId: 'ZtCgWHUxLSA',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                word: false
            },
            {
                name: 'Corina Zugravu',
                text: 'Corina Zugravu, associate professor for food safety and nutrition, shares with us the number one benefit on a plant based diet. ',
                videoId: 'Qzmf6FNFRpg',
                fontSize: {
                    browser: '5vw',
                    mobile: '7.5vw'
                },
                word: false
            },
            {
                name: 'Katharina Hani',
                text: 'Katharina Hani, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                videoId: 'NiA87gSUX_w', 
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                word: false
            },
            {
                name: 'Nicusor Popa',
                text: 'Nicusor Popa, founder at Spirit Animals Sanctuary, talks about the true nature of horses.',
                videoId: '2A1eZqShnyM',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                word: false
            },
            {
                name: 'Iulia Morosanu',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                word: false
            },
            {
                name: 'Ana Maria Voicu',
                text: '',
                videoId: '',
                fontSize: {
                    browser: '4.5vw',
                    mobile: '6.5vw'
                },
                word: false
            }
        ]
    }
]

export default class Interviews extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false,
            interviewee: {}
        };

        this.handleModal = this.handleModal.bind(this)
    }

    handleModal(interviewee) {
        this.setState({
            showModal: !this.state.showModal
        })
        interviewee ? this.setState({
            interviewee: interviewee
        }) : ''
    }

    render() {
        return(
            // <ul class={style.interviews__container}>
            //     {
            //         interviews.map(row => {
            //             return (
            //                 // <li class={style.interviewee}>
            //                 //     <p class={style.interviewee__text}>
            //                 //         {interviewee.text}
            //                 //     </p>
            //                 //     <div class={style.interviewee__video}>
            //                 //         <YouTube videoId={interviewee.videoId} />
            //                 //     </div>
            //                 // </li>
            //             )
            //         })
            //     }
            // </ul>

            <ul class={style.interviews__container}>
                {
                    interviews.map(interviewees => {
                        return (
                            <li class={style.interviewee}>
                                {
                                    interviewees.interviewees.map(interviewee => {
                                        return (
                                            <p 
                                            class={interviewee.word ? style.interviewee__word : style.interviewee__name} 
                                            style={{fontSize: isMobile ? interviewee.fontSize.mobile : interviewee.fontSize.browser }}
                                            onClick={() => this.handleModal(interviewee)}
                                                >
                                                {interviewee.name}
                                            </p>
                                        )
                                    })
                                }
                            </li>
                        )
                    })
                }
                <Modal showModal={this.state.showModal} interviewee={this.state.interviewee} handleModal={this.handleModal} />
            </ul>
        )
    }
}