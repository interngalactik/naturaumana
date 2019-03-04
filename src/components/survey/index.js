import { h, Component } from 'preact';
import style from './style';
import { Text } from 'preact-i18n';

export default class Survey extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.container__box}>
          <div className={style.container__text}>
            <h1>
              <Text id="donate.title" />
            </h1>
            <h2>
              <Text id="donate.header" />
            </h2>
          </div>
          <div className={style.container__buttons}>
            <button style={style.button}>
              <Text id="donate.question" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}