import { h, Component } from 'preact';
import style from './style';

export default class DonateButton extends Component {
    constructor() {
        super();
    }

    handleDonate() {
        console.log('Donate');
    }

    render({ btnContainerStyle, btnStyle}) {
        return(
            <div className={btnContainerStyle}>
                <button className={btnStyle} onClick={this.handleDonate}>Donate</button>
            </div>
        )
    }
}