import { h, Component } from 'preact';
import style from './style';

const ngos = [
  {
    imgUrl: '/assets/images/ngos/cmv.png',
    name: 'Ce Mananca Veganii',
    shortDesc: 'O comunitate în care vei găsi reţete, idei, inspiraţie.',
    url: 'https://www.facebook.com/groups/276483809415890',
  },
  {
    imgUrl: '/assets/images/ngos/start22.png',
    name: 'Start 22',
    shortDesc:
      'Programul se adresează noilor vegani sau persoanelor care au decis să adopte un stil de viață vegan și care doresc sprijin în acest proces.',
    url: 'https://www.start22.ro/inscrie-te/',
  },
  {
    imgUrl: '/assets/images/ngos/justfood.png',
    name: 'Just Food',
    shortDesc:
      'Promovează alinierea valorilor morale universale cu propriile acțiuni zilnice, astfel încât să ne reducem impactul negativ asupra planetei și a tuturor ființelor.',
    url: 'https://www.facebook.com/justjust.ro',
  },
  {
    imgUrl: '/assets/images/ngos/veganoutreach.png',
    name: 'Vegan in 10 saptamani',
    shortDesc:
      'Un program care îți oferă îndrumare gratuită pentru a face tranziția către o alimentație bazată pe plante într-un mod mai ușor și mai distractiv.',
    url: 'https://veganoutreach.org/mc10wro/?tracking=naturaumana.com',
  },
];

export default class Change extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className={style.ngos__main}>
        <div className={style.ngos__container}>
          {ngos.map((ngo) => {
            return (
              <div className={style.ngo__container}>
                <a href={ngo.url} target="__blank">
                  <div className={style.ngo__container__img}>
                    <img src={ngo.imgUrl} alt={ngo.name} />
                  </div>
                  <div className={style.ngo__container__description}>
                    <p>{ngo.shortDesc}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
