import { Component } from 'preact';
import style from './style';

const laureats = [
  {
    name: 'Best Documentary - The Buddha International Film Festival 2020',
    imgUrl: '/assets/images/laureats/best_tbiff.png',
  },
  {
    name: 'Finalist - Eastern Europe Film Festival 2020',
    imgUrl: '/assets/images/laureats/finalist_eef.png',
  },
  {
    name: 'Honorable Mention - Lucerna Youth and Children Film Festival 2020',
    imgUrl: '/assets/images/laureats/hm_lycff.png',
  },
  {
    name: 'Official Selection - Bucharest Film Awards 2021',
    imgUrl: '/assets/images/laureats/os_bfa.png',
  },
];

export default class Laureats extends Component {
  render() {
    return (
      <ul className={style.laureats__container}>
        <li className={style.laureat}>
          {laureats.map((laureat) => {
            return <img src={laureat.imgUrl} alt={laureat.name} />;
          })}
        </li>
      </ul>
    );
  }
}
