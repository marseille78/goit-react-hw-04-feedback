import PropTypes from 'prop-types';

import css from './statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <ul className={css.statistics}>
      <li className={css['statistics-item']}>Good: {good}</li>
      <li className={css['statistics-item']}>Neutral: {neutral}</li>
      <li className={css['statistics-item']}>Bad: {bad}</li>
      <li className={css['statistics-item']}>Total: {total}</li>
      <li className={css['statistics-item']}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
