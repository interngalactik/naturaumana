import { h, Component } from 'preact';
import style from './style';
import { Text, withText } from 'preact-i18n';

@withText({
  text: <Text id="donate.subtitle" />,
})
export default class Survey extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      typingText: '',
      showCursor: true,
    };
  }

  handleClick(button) {
    this.setState({
      step: this.state.step + button.increment,
    });
    if (button.link) {
      window.location = button.link;
    }
  }

  handleBackButton() {
    this.setState({
      step: 1,
    });
  }

  handleTyping() {
    let delay = 0;
    let initialDelay = 1000;
    let letterDelay = 45;

    for (let i = 1; i <= this.props.text.length; i++) {
      delay += Math.round((Math.random() * letterDelay) / 2) + letterDelay;

      if (
        i === 1 ||
        this.props.text[i - 2] === '.' ||
        this.props.text[i - 2] === '?'
      )
        delay += initialDelay;

      this.interval = setTimeout(
        () =>
          this.setState({
            typingText: this.props.text.substring(0, i),
            showCursor: i !== this.props.text.length,
          }),
        delay
      );
    }
  }

  componentDidMount() {
    this.handleTyping();
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render({ steps }, { typingText }) {
    return (
      <div className={style.container}>
        <div className={style.container__box}>
          <div className={style.container__text}>
            <h1>
              <Text id="donate.title" />
            </h1>
            <h2>{typingText}</h2>
          </div>
          <div className={style.container__buttons}>
            {steps[this.state.step].buttons.map((button) => {
              return (
                <button
                  style={style.button}
                  onClick={() => this.handleClick(button)}
                >
                  {button.title}
                </button>
              );
            })}
          </div>
        </div>
        <footer>
          <div className={style.button__back}>
            {this.state.step > 1 ? (
              <img
                src="/assets/icons/keyboard_back.png"
                onClick={() => this.handleBackButton()}
              />
            ) : (
              ''
            )}
          </div>
          <p>
            <Text id="donate.warning" />
          </p>
        </footer>
      </div>
    );
  }
}
