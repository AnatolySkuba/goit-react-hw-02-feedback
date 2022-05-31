import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good / (good + neutral + bad)) * 100);
  };

  onLeaveFeedback = evt => {
    evt.preventDefault();
    const element = evt.target.innerText.toLowerCase();
    this.setState(state => ({
      [element]: state[element] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { state, onLeaveFeedback, countPositiveFeedbackPercentage } = this;
    const buttons = Object.keys(state);
    const total = good + neutral + bad;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={onLeaveFeedback} />
        <h2>Statistics</h2>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification
            message="There is no feedback"
            text={'No feedback given'}
          />
        )}
      </Section>
    );
  }
}
