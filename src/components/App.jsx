import { useState } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedback-options';
import Section from './section';
import Notification from './notification';

export const types = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad'
};

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0
}

export const App = () => {

  const [state, setState] = useState(initialState);

  const { good, neutral, bad } = state;

  const handleLeaveFeedback = (field) => {
    setState(state => ({
      ...state,
      [field]: state[field] + 1
    }))
  }

  const countTotalFeedback = () => {
    return Object.values(state).reduce((count, field) => count + field, 0);
  }

  const countPositiveFeedbackPercentage = () => {
    return good > 0
      ? Math.round(good / countTotalFeedback() * 100)
      : 0;
  }

  const total = countTotalFeedback()

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={ Object.keys(state) } onLeaveFeedback={ handleLeaveFeedback }/>
      </Section>

      {
        total > 0
          ? (<Section title='Statistics'>
            <Statistics
              good={ good }
              neutral={ neutral }
              bad={ bad }
              total={ total }
              positivePercentage={ countPositiveFeedbackPercentage() }
            />
          </Section>)
          : <Notification message="There is no feedback"/>
      }
    </>
  );
};
