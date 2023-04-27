import PropTypes from 'prop-types';

import css from './feedback-options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  const btnList = options.map(item => (
    <button
      key={item}
      className={css.btn}
      type="button"
      onClick={() => onLeaveFeedback(item)}
    >
      { item }
    </button>
  ));

  return (
    <div className='btn-group'>
      { btnList }
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
