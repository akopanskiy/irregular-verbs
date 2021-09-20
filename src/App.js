import React, { Component } from 'react';
import FormBasic from './component/FormBasic';
import FormSecond from './component/FormSecond';
import FormThird from './component/FormThird';
import Section from './component/Section';
import Translate from './component/Translate';
import styles from './component/Section/Section.module.css';

import words from './json/words.json';

class App extends Component {
  state = {
    word: words,
    basic: '',
    secondForm: '',
    thirdForm: '',
    secondverb: '',
    thirdverb: '',
    translate: '',
  };

  getWord = () => {
    return this.setState({
      basic:
        this.state.word[Math.floor(Math.random() * this.state.word.length)],
      secondForm: '',
      thirdForm: '',
      secondverb: '',
      thirdverb: '',
      translate: '',
    });
  };

  secondForm = () => {
    return this.setState({
      secondForm: this.state.basic.V2,
    });
  };

  thirdForm = () => {
    return this.setState({
      thirdForm: this.state.basic.V3,
    });
  };

  translater = () => {
    return this.setState({ translate: this.state.basic.Tr });
  };
  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  render() {
    const { basic, secondForm, secondverb, thirdForm, thirdverb, translate } =
      this.state;
    return (
      <div className={styles.form}>
        <Section title={'Basic form'}>
          <FormBasic value={basic.V} click={this.getWord} />
        </Section>

        <Section title={'Second form'}>
          <FormSecond value={secondForm} click={this.secondForm} />
          <form className={styles.formInput}>
            <label>
              <input
                className={styles.lfInput}
                type="text"
                name="secondverb"
                placeholder="enter your variant"
                value={secondverb}
                onChange={this.handleChange}
                style={{
                  backgroundColor:
                    secondForm === ''
                      ? 'yellow'
                      : secondForm === secondverb.toLowerCase()
                      ? 'green'
                      : 'red',
                }}
              ></input>
            </label>
          </form>
        </Section>

        <Section title={'Third form'}>
          <FormThird value={thirdForm} click={this.thirdForm} />
          <form className={styles.formInput}>
            <label>
              <input
                className={styles.lfInput}
                type="text"
                name="thirdverb"
                placeholder="enter your variant"
                value={thirdverb}
                onChange={this.handleChange}
                style={{
                  backgroundColor:
                    thirdForm === ''
                      ? 'yellow'
                      : thirdForm === thirdverb.toLowerCase()
                      ? 'green'
                      : 'red',
                }}
              ></input>
            </label>
          </form>
        </Section>
        <Section title={'Basic form'}>
          <Translate value={translate} click={this.translater} />
        </Section>
      </div>
    );
  }
}

export default App;
