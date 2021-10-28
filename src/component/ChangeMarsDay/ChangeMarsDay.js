import styles from './ChangeMarsDay.module.css';

const ChangeMarsDay = ({ marsDay, onchange, activeButton }) => {
  return (
    <div className={styles.enterDayContainer}>
      <label className={styles.labelEnterDay}>
        <input
          className={styles.enterDay}
          type="number"
          autoComplete="off"
          autoFocus
          placeholder="Enter Mars day"
          value={marsDay}
          onChange={onchange}
        />
      </label>
      <button
        type="submit"
        disabled={activeButton}
        // className={styles.changeData}
        style={{
          backgroundColor: activeButton === true ? 'gray' : 'blue',
        }}
      >
        {' '}
        Як тобі таке, Ілон Маск?
      </button>
    </div>
  );
};
export default ChangeMarsDay;
