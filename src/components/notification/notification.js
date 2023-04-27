import PropTypes from 'prop-types';

import css from './notification.module.css';

const Notification = ({message}) => {
  return (
    <div className={css.container}>
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;
