import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { IntlProvider } from 'preact-i18n';
import Redirect from '../utils/Redirect';

// Code-splitting is automated for routes
import Donate from '../routes/donate';
import Home from '../routes/home';

let locale;
let language;
language = navigator.language.split(/[-_]/)[0];

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
  };

	render() {
    language = navigator.language.split(/[-_]/)[0];
    if (language === 'ro') {
      locale = require('../i18n/ro.json');
    } else {
      locale = require('../i18n/en.json');
    }
		return (
			<div id="app">
        <IntlProvider definition={locale}>
          <Router onChange={this.handleRoute}>
            <Donate path="/donate" />
            <Home path="/" />
          </Router>
        </IntlProvider>
			</div>
		);
	}
}
