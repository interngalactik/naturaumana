import { h, Component } from 'preact';
import style from './style';

export default class Survey extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.container__box}>
          <h1>Vrei sa donezi?</h1>
          <button style={style.button}>Da</button>
          <button style={style.button}>Nu</button>
        </div>
      </div>
    )
  }
}