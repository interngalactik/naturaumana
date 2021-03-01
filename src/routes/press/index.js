import { Component } from 'preact';
import { Select } from '@rmwc/select';
import { Text } from 'preact-i18n';

import style from './style';
import '@rmwc/select/styles';

const pressReleaseRO = [
  {
    title: 'Premieră în România: filmul Natura Umană',
    firstParagraph:
      'Pe data de 28 martie vă invităm la premiera filmului Natura Umană - primul documentar românesc care explorează relația dintre om, animale și natură. Participarea este gratuită.',
    fbEvent: 'Eveniment facebook: ',
    eventLink: 'https://www.facebook.com/events/3899454016764581',
    paragraphs_1: [
      'Documentarul își propune să ridice mai multe întrebări privitoare la interacțiunea noastră cu animalele și cu mediul înconjurător.',
      'Ce responsabilități avem față de animale?',
      'Cu ce prejudecăți legate de alimentație ne confruntăm în societate?',
      'Cum afectează exploatarea animalelor mediul și sănătatea umană și ce soluții avem la îndemână?',
    ],
    paragraphs_2: [
      'Filmul mai reușește și să aducă în fața noastră, după 2 ani de investigații și interviuri cu artişti, medici nutriționiști, filosofi, politicieni, sportivi, activiști sau oameni simpli, experiența și poveștile de viață ale acestora, toate cuprinse într-un documentar captivant care va prezenta lumea așa cum o știm într-un mod unic.',
      'Durata: 2h 19min',
      'Au participat: Paula Seling, Deliric, Remus Cernea, Andrei Roșu, Marius Mitrache, Liviu Deacu, Gigi Ghinea, Doina Badea, Paul Sandu, Bogdan Gioară, Corina Zugravu, Sorin Dumitru, Anca Georgescu, Katharina Häni, Nicușor Popa, Iulia Moroșanu, Ana Maria Voicu',
    ],
    credits: [
      'Scris, produs și regizat de: Eduard Nistru și Diana Musca',
      'Cameramani: Diana Musca, Eduard Nistru, François Carreau',
      'Sound Design și Muzica: Daria Someșan',
      'Color Grading: Tobi Heil',
      'Animații: Iulia Vicol și Octavian Ristici',
      'Producător Executiv: Eduard Nistru',
    ],
  },
];

const pressReleaseEN = [
  {
    title: 'Film Premiere in Romania: Natura Umana',
    firstParagraph:
      'Natura Umana film, the first Romanian documentary exploring the relationship between humans, animals and nature, will premiere on March 28.',
    fbEvent: 'Facebook event: ',
    eventLink: 'https://www.facebook.com/events/3899454016764581',
    paragraphs_1: [
      'The documentary raises a lot of questions regarding our interaction with animals and nature.',
      'What are our responsibilities towards animals?',
      'What types of dietary biases do we encounter in our society?',
      'How does animal exploitation impact the environment and our health and what solutions do we have at hand?',
    ],
    paragraphs_2: [
      'The film also succeeds, after 2 years of investigations and interviews with artists, nutritionists specialists, philosophers, athletes, activists and ordinary people, to present their stories and life experiences- all gathered in a captivating documentary that will show the world as we know it in a new light.',
      'Length: 2h 19min',
      'With the participation of: Paula Seling, Deliric, Remus Cernea, Andrei Roșu, Marius Mitrache, Liviu Deacu, Gigi Ghinea, Doina Badea, Paul Sandu, Bogdan Gioară, Corina Zugravu, Sorin Dumitru, Anca Georgescu, Katharina Häni, Nicușor Popa, Iulia Moroșanu, Ana Maria Voicu',
    ],
    credits: [
      'Written, produced and directed by: Eduard Nistru and Diana Musca',
      'Camera Operators: Diana Musca, Eduard Nistru, François Carreau',
      'Sound Design and Original Score: Daria Someșan',
      'Color Grading: Tobi Heil',
      'Animation: Iulia Vicol and Octavian Ristici',
      'Executive Producer: Eduard Nistru',
    ],
  },
];

const options = [
  {
    label: <Text id="press.language.ro" />,
    value: 'ro',
  },
  {
    label: <Text id="press.language.en" />,
    value: 'en',
  },
];

export default class Press extends Component {
  constructor() {
    super();

    this.state = {
      pressRelease: pressReleaseRO,
    };

    this.selectLanguage = this.selectLanguage.bind(this);
  }

  selectLanguage(e) {
    const selectedLanguage = e.currentTarget.value;
    if (selectedLanguage === 'ro') {
      this.setState({
        pressRelease: pressReleaseRO,
      });
    } else {
      this.setState({
        pressRelease: pressReleaseEN,
      });
    }
  }

  render({}, { pressRelease }) {
    return (
      <div className={style.press__container}>
        <Select
          label={<Text id="press.language.title" />}
          options={options}
          onChange={this.selectLanguage}
        />
        {pressRelease.map((pr) => {
          return (
            <div className={style.press__content}>
              <h1>{pr.title}</h1>
              <br />
              <p>{pr.firstParagraph}</p>
              <br />
              <p>
                {pr.fbEvent}{' '}
                <a href={pr.eventLink} target="__blank">
                  {pr.eventLink}
                </a>
              </p>
              <br />
              {pr.paragraphs_1.map((paragraph) => {
                return (
                  <>
                    <p>{paragraph}</p>
                  </>
                );
              })}
              <br />
              {pr.paragraphs_2.map((paragraph) => {
                return (
                  <>
                    <p>{paragraph}</p>
                    <br />
                  </>
                );
              })}
              {pr.credits.map((credit) => {
                return (
                  <>
                    <p>{credit}</p>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
