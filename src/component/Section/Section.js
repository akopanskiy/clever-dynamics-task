import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles.name}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;
