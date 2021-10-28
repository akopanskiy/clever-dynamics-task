import styles from './Message.module.css';

const Message = ({ text }) => {
  return <h1 className={styles.message}>{text}</h1>;
};
export default Message;
