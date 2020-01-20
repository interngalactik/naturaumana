import { h, Component } from 'preact';
import style from './style';

export default class DonateButton extends Component {
    constructor() {
        super();
    }

    handleDonate() {
        console.log('Donate');
    }

    render() {
        return(
            <div className={style.container__button}>
                <button className={style.button} onClick={this.handleDonate}>Donate</button>
            </div>
        )
    }
}