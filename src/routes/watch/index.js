import { h, Component } from 'preact';

import SecretWatch from '../../components/secretWatch';

export default class Watch extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <SecretWatch />;
  }
}
