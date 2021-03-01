import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { IntlProvider } from 'preact-i18n';
import Redirect from '../utils/Redirect';
import { ThemeProvider } from '@rmwc/theme';
import '@rmwc/theme/styles';

// Code-splitting is automated for routes
import Donate from '../routes/donate';
import Home from '../routes/home';
import Watch from '../routes/watch';
import Press from '../routes/press';
import Header from '../components/header';
import Footer from '../components/footer';
import Container from '../components/container';

let locale;
let language;
language = navigator.language.split(/[-_]/)[0];

export default class Application extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
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
      <IntlProvider definition={locale}>
        <div id="app">
          <ThemeProvider options={{ primary: '#000', secondary: '#ffcf3d' }}>
            <Header />
            <Container>
              <Router onChange={this.handleRoute}>
                <Donate path="/donate" />
                <Home path="/" />
                <Watch path="/watch" />
                <Press path="/press" />
              </Router>
              <Footer />
            </Container>
          </ThemeProvider>
        </div>
      </IntlProvider>
    );
  }
}
