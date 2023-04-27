import { useReducer } from 'react';
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

function feedbackReducer(state, action) {
  const { GOOD, NEUTRAL, BAD } = types;

  switch (action.type) {
    case GOOD:
      return {
        ...state,
        good: state[GOOD] + 1
      };
    case NEUTRAL:
      return {
        ...state,
        neutral: state[NEUTRAL] + 1
      };
    case BAD:
      return {
        ...state,
        bad: state[BAD] + 1
      };
    default:
      throw new Error();
  }
}

export const App = () => {

  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const { good, neutral, bad } = state;

  const handleLeaveFeedback = (field) => {
    dispatch({ type: field });
  }

  const countTotalFeedback = () => {
    return Object.values(state).reduce((count, field) => count + field, 0);
  }

  const countPositiveFeedbackPercentage = () => {
    return good > 0
      ? Math.round(good / countTotalFeedback() * 100)
      : 0;
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={ Object.keys(state) } onLeaveFeedback={ handleLeaveFeedback }/>
      </Section>

      {
        countTotalFeedback() > 0
          ? (<Section title='Statistics'>
            <Statistics
              good={ good }
              neutral={ neutral }
              bad={ bad }
              total={ countTotalFeedback() }
              positivePercentage={ countPositiveFeedbackPercentage() }
            />
          </Section>)
          : <Notification message="There is no feedback"/>
      }
    </>
  );
};
