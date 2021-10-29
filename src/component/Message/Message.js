import PropTypes from 'prop-types';

import styles from './Message.module.css';

const Message = ({ text }) => {
  return <h1 className={styles.message}>{text}</h1>;
};
Message.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Message;
