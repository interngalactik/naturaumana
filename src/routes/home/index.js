import { h, Component } from 'preact';
import Video from '../../components/video';
import Interviews from '../../components/credits/interviews';
import Teams from '../../components/credits/teams';
import Laureats from '../../components/laureats';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        <Video />
        <Laureats />
        <Interviews />
        <Teams />
      </>
    );
  }
}
