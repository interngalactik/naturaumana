import { h, Component } from 'preact';
import style from './style';
import 'plyr-react/dist/plyr.css';
import Modal from '../modal';
import { isMobile } from 'react-device-detect';
import { Text } from 'preact-i18n';

const interviews = [
  {
    interviewees: [
      {
        name: <Text id="home.credits.starring" />,
        text: '',
        videoId: '',
        fontSize: {
          browser: '3vw',
          mobile: '4vw',
        },
        word: true,
      },
      {
        name: 'Paula Seling',
        text:
          'Cel mai important moment este când reuşeşti să te pui în locul celuilalt şi să empatizezi" - Paula Seling, artist compozitor şi interpret',
        videoId: '2m08JDoTo4k',
        fontSize: {
          browser: '6vw',
          mobile: '8vw',
        },
        word: false,
      },
      {
        name: 'Deliric',
        text:
          '"Mi-ar plăcea să devină din ce în ce mai mulți oameni vegani, dar nu cred că poți să o impui... e o schimbare în mentalitate și o să vină la fiecare." - Deliric, artist Hip-Hop',
        videoId: 'gWWvIdyqLtc',
        fontSize: {
          browser: '6vw',
          mobile: '8vw',
        },
        word: false,
      },
    ],
  },
  {
    interviewees: [
      {
        name: 'Remus Cernea',
        text:
          'Remus Cernea ne vorbeşte despre schimbare şi despre empatia faţă de cei care au alte opinii.',
        videoId: 'CfVidVPVSmE',
        fontSize: {
          browser: '5vw',
          mobile: '6vw',
        },
        word: false,
      },
      {
        name: 'Andrei Rosu',
        text:
          'Putem face sport cu o alimentaţie bazată pe plante? Ne răspunde Andrei Rosu, sportiv de anduranţă, care: a traversat oceanul Atlantic vâslind, a terminat cea mai grea dură cursă de alergare în condiţii arctice: 6633 Arctic Ultra şi multe, multe altele.',
        videoId: 'mvk7o09s2kE',
        fontSize: {
          browser: '5vw',
          mobile: '6vw',
        },
        word: false,
      },
      {
        name: 'Marius Mitrache',
        text:
          'Marius Mitrache, multiplu campion național la culturism, ne lămurește dacă putem construi masă musculară cu o alimentație bazată pe plante.',
        videoId: 'DWcSzjKpDHY',
        fontSize: {
          browser: '5vw',
          mobile: '6vw',
        },
        word: false,
      },
      {
        name: 'Liviu Deacu',
        text:
          'Este alimentaţia bazată pe plante potrivită pentru toate stadiile vieţii unui om? Liviu Deacu, medic nutriţionist şi dietetician, ne răspunde.',
        videoId: 'UCQAokuasN8',
        fontSize: {
          browser: '5vw',
          mobile: '6vw',
        },
        word: false,
      },
    ],
  },
  {
    interviewees: [
      {
        name: 'Gigi Ghinea',
        text:
          'Gigi Ghinea, psiholog și autor, ne vorbește despre legătura dintre o țară post-comunistă și obiceiurile alimentare.',
        videoId: 'EyWZvwAA95w',
        fontSize: {
          browser: '5vw',
          mobile: '5.5vw',
        },
        word: false,
      },
      {
        name: 'Doinea Badea',
        text:
          'Doina Badea, co-fondatoarea primului sanctuar destinat animalelor de fermă din România, Sanctuarul Nima, ne împărtășește iubirea și aprecierea ei pentru blândele și curioasele văcuțe.',
        videoId: 'KlpWbNeyo_w',
        fontSize: {
          browser: '5vw',
          mobile: '5.5vw',
        },
        word: false,
      },
      {
        name: 'Paul Sandu',
        text:
          'Paul Gabriel Sandu, filosof și om politic, ne vorbește despre cultura occidentală și imperativul suferinței de a fi oprită.',
        videoId: 'dsdPZINYwbU',
        fontSize: {
          browser: '5vw',
          mobile: '5.5vw',
        },
        word: false,
      },
      {
        name: 'Anca Georgescu',
        text:
          'Anca Georgescu, director de strategie și comunicare de la TAC medicina veterinara sociala, ne povestește despre câinii singuri și despre cum îi putem ajuta.',
        videoId: 'htCuv9sLoEA',
        fontSize: {
          browser: '5vw',
          mobile: '5.5vw',
        },
        word: false,
      },
      {
        name: 'Bogdan Gioara',
        text:
          'Bogdan Gioară vorbește despre impactul agriculturii zootehnice asupra schimbărilor climatice și incompatibilitatea ei cu vremurile pe care le trăim.',
        videoId: 'huJpw0JHRA8',
        fontSize: {
          browser: '5vw',
          mobile: '5.5vw',
        },
        word: false,
      },
    ],
  },

  {
    interviewees: [
      {
        name: 'Sorin Dumitru',
        text:
          'Tu ai lucra într-un mediu plin de violenţă? Sorin Dumitru, psiholog, ne vorbeşte despre impactul lucratului în abatoare şi ferme.',
        videoId: 'ZtCgWHUxLSA',
        fontSize: {
          browser: '4.5vw',
          mobile: '5vw',
        },
        word: false,
      },
      {
        name: 'Corina Zugravu',
        text:
          'Corina Zugravu, medic primar igiena alimentației și nutriție, ne împărtășește principalul beneficiu al unei diete bazate pe plante.',
        videoId: 'Qzmf6FNFRpg',
        fontSize: {
          browser: '4.5vw',
          mobile: '5vw',
        },
        word: false,
      },
      {
        name: 'Katharina Hani',
        text:
          'Agricultură fără îngrăşăminte exterioare, fie ele de origine animală sau chimică? Katharina Häni ne povesteşte mai multe în acest video scurt.',
        videoId: 'NiA87gSUX_w',
        fontSize: {
          browser: '4.5vw',
          mobile: '5vw',
        },
        word: false,
      },
      {
        name: 'Nicusor Popa',
        text:
          'Nicusor Popa, fondator al sanctuarului Spirit Animals Sanctuary, ne povestește despre natura adevărată a cailor.',
        videoId: '2A1eZqShnyM',
        fontSize: {
          browser: '4.5vw',
          mobile: '5vw',
        },
        word: false,
      },
      {
        name: 'Iulia Morosanu',
        text:
          'Cum aflăm prima dată despre animale? Încă de când suntem copii, fie în familie, fie prin intermediul cărţilor cu ilustraţii, ne este indicat la ce sunt de folos restul animalelor omului: "găina ne dă ouă, vaca ne dă lapte, oaia ne dă lână"... sună familiar? Ei bine, Iulia Moroşanu este o mamă care a adoptat stilul de viaţă vegan şi ne povesteşte prin prisma acestei experienţe cum a observat rădăcinile speciismului în societatea noastră şi cum se perpetuează acesta, ajungând la vârstă adultă să credem aceleaşi lucruri despre animale pe care le-am dobândit când eram mici.',
        videoId: 'LC7mIJlOlxs',
        fontSize: {
          browser: '4.5vw',
          mobile: '5vw',
        },
        word: false,
      },
      {
        name: 'Ana Maria Voicu',
        text:
          'Știai că cel mai mare adăpost de câini din lume, recunoscut oficial de Guinness World Records, își are reședința în România? Ana Maria Voicu, director AULIM, ne împărtășește statistici despre abandonul câinilor și aduce la cunoștință că valoarea unui câine nu constă în rasa acestuia.',
        videoId: 'Kp8wlO_IdZg',
        fontSize: {
          browser: '4.5vw',
          mobile: '5vw',
        },
        word: false,
      },
    ],
  },
];

export default class Interviews extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      interviewee: {},
    };

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(interviewee) {
    this.setState({
      showModal: !this.state.showModal,
    });
    interviewee
      ? this.setState({
          interviewee: interviewee,
        })
      : '';
  }

  render() {
    return (
      <ul class={style.interviews__container}>
        {interviews.map((interviewees) => {
          return (
            <li class={style.interviewee}>
              {interviewees.interviewees.map((interviewee) => {
                return (
                  <p
                    class={
                      interviewee.word
                        ? style.interviewee__word
                        : style.interviewee__name
                    }
                    style={{
                      fontSize: isMobile
                        ? interviewee.fontSize.mobile
                        : interviewee.fontSize.browser,
                    }}
                    onClick={() => this.handleModal(interviewee)}
                  >
                    {interviewee.name}
                  </p>
                );
              })}
            </li>
          );
        })}
        <Modal
          showModal={this.state.showModal}
          interviewee={this.state.interviewee}
          handleModal={this.handleModal}
        />
      </ul>
    );
  }
}
