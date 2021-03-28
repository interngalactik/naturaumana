import { h, Component } from 'preact';
import style from './style';

const docs = [
  {
    imgUrl: '/assets/images/docs/seaspiracy.jpg',
    name: 'Seaspiracy',
    shortDesc: '',
    url: 'https://www.netflix.com/title/81014008',
  },
  {
    imgUrl: '/assets/images/docs/dominion.jpg',
    name: 'Dominion',
    shortDesc: '',
    url: 'https://www.youtube.com/watch?v=LQRAfJyEsko',
  },
  {
    imgUrl: '/assets/images/docs/cowspiracy.jpg',
    name: 'Cowspiracy',
    shortDesc: '',
    url: 'https://www.netflix.com/title/80033772',
  },
  {
    imgUrl: '/assets/images/docs/thegamechangers.jpg',
    name: 'The Game Changers',
    shortDesc: '',
    url: 'https://www.netflix.com/title/81157840',
  },
  {
    imgUrl: '/assets/images/docs/wth.jpg',
    name: 'What The Health',
    shortDesc: '',
    url: 'https://www.netflix.com/title/80174177',
  },
];

export default class Docs extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className={style.docs__main}>
        <div className={style.docs__container}>
          {docs.map((doc) => {
            return (
              <div className={style.doc__container}>
                <a href={doc.url} target="__blank">
                  <img src={doc.imgUrl} alt={doc.name} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
