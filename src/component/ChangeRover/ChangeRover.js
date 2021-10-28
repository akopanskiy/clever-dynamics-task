import styles from './ChangeRover.module.css';
import photoCuriosity from '../../images/curiosity.jpg';
import photoOpportunity from '../../images/opportunity.jpg';
import photoSpirit from '../../images/spirit.jpg';

const ChangeRover = ({ rover, onChange }) => {
  return (
    <div className={styles.roverContainer}>
      <label className={styles.kard}>
        <input
          className={styles.kardRadio}
          type="radio"
          name="rover"
          value="curiosity"
          onChange={onChange}
          checked={rover === 'curiosity'}
        />
        <div className={styles.planDetails}>
          <div className={styles.planType}>
            <span className={styles.nameRover}>Curiosity</span>
          </div>
          <div className={styles.planImage}>
            <img src={photoCuriosity} alt="" className={styles.planImage} />
          </div>
        </div>
      </label>
      <label className={styles.kard}>
        <input
          className={styles.kardRadio}
          type="radio"
          name="rover"
          value="opportunity"
          onChange={onChange}
          checked={rover === 'opportunity'}
        />
        <div className={styles.planDetails}>
          <div className={styles.planType}>
            <span className={styles.nameRover}>Opportunity</span>
          </div>
          <div className={styles.planImage}>
            <img src={photoOpportunity} alt="" className={styles.planImage} />
          </div>
        </div>
      </label>
      <label className={styles.kard}>
        <input
          className={styles.kardRadio}
          type="radio"
          name="rover"
          value="spirit"
          onChange={onChange}
          checked={rover === 'spirit'}
        />
        <div className={styles.planDetails}>
          <div className={styles.planType}>
            <span className={styles.nameRover}>Spirit</span>
          </div>
          <div className={styles.planImage}>
            <img src={photoSpirit} alt="" className={styles.planImage} />
          </div>
        </div>
      </label>
    </div>
  );
};
export default ChangeRover;
