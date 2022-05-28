import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import { Component } from 'react';

export default class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
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
    const {
      state,
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <>
        <h2>Please leave feedback</h2>
        <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
