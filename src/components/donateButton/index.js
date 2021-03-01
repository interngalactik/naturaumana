import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Text } from 'preact-i18n';
import style from './style';

export default class DonateButton extends Component {
  constructor() {
    super();
  }

  handleDonate() {
    // route('/donate', true);
    window.open('https://www.paypal.me/naturaumanafilm', '__blank');
  }

  render({ btnContainerStyle, btnStyle }) {
    return (
      <div className={btnContainerStyle}>
        <button className={btnStyle} onClick={this.handleDonate}>
          <Text id="donate.buttons.donate" />
        </button>
      </div>
    );
  }
}
