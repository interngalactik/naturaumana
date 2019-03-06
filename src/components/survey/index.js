import { h, Component } from 'preact';
import style from './style';
import { Text, withText } from 'preact-i18n';

@withText({
  text: <Text id="donate.subtitle" />
})
export default class Survey extends Component {
    state = {
      step: 1,
      typingText: '',
      showCursor: true
    }

    delay = 0;
    initialDelay = 1000;
    letterDelay = 45;

  handleClick(button) {
    this.setState({ 
      step: this.state.step + button.increment
    })
    if (button.link) {
      window.location = button.link;
    }
  }

  componentDidMount() {
    let delay = 0;

    for (let i = 1; i <= this.props.text.length; i++) {
      delay += Math.round(Math.random() * this.letterDelay / 2) + this.letterDelay;

      if (i === 1 || this.props.text[i - 2] === '.' || this.props.text[i - 2] === '?') delay += this.initialDelay;

      setTimeout(() => this.setState({ typingText: this.props.text.substring(0, i), showCursor: i !== this.props.text.length }), delay);
    }
  }

  render({ steps }, { typingText }) {
    return (
      <div className={style.container}>
        <div className={style.container__box}>
          <div className={style.container__text}>
            <h1>
              <Text id="donate.title" />
            </h1>
            <h2>
              {typingText}
            </h2>
          </div>
          <div className={style.container__buttons}>
          {
            steps[this.state.step].buttons.map(button => {
              return (
                <button style={style.button} onClick={() => this.handleClick(button)}>
                  {button.title}
                </button>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}