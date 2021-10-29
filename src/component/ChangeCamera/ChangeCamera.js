import PropTypes from 'prop-types';

import styles from './ChangeCamera.module.css';
import front from '../../images/front.jpg';
import rear from '../../images/rear.jpg';
import navi from '../../images/navi.jpg';

const ChangeCamera = ({ camera, onChange }) => {
  return (
    <div className={styles.cameraContainer}>
      <label className={styles.kard}>
        <input
          className={styles.kardRadio}
          type="radio"
          name="camera"
          value="fhaz"
          onChange={onChange}
          checked={camera === 'fhaz'}
        />
        <div className={styles.planDetails}>
          <div className={styles.planType}>
            <span className={styles.nameCamera}>Front Camera</span>
          </div>
          <div className={styles.planImage}>
            <img src={front} alt="" className={styles.planImage} />
          </div>
        </div>
      </label>
      <label className={styles.kard}>
        <input
          className={styles.kardRadio}
          type="radio"
          name="camera"
          value="rhaz"
          onChange={onChange}
          checked={camera === 'rhaz'}
        />
        <div className={styles.planDetails}>
          <div className={styles.planType}>
            <span className={styles.nameCamera}>Rear Camera</span>
          </div>
          <div className={styles.planImage}>
            <img src={rear} alt="" className={styles.planImage} />
          </div>
        </div>
      </label>{' '}
      <label className={styles.kard}>
        <input
          className={styles.kardRadio}
          type="radio"
          name="camera"
          value="navcam"
          onChange={onChange}
          checked={camera === 'navcam'}
        />
        <div className={styles.planDetails}>
          <div className={styles.planType}>
            <span className={styles.nameCamera}>Navi Camera</span>
          </div>
          <div className={styles.planImage}>
            <img src={navi} alt="" className={styles.planImage} />
          </div>
        </div>
      </label>{' '}
    </div>
  );
};
ChangeCamera.propTypes = {
  camera: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ChangeCamera;
