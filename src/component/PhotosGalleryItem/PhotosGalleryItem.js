import PropTypes from 'prop-types';
import defaultImg from '../../images/default.jpg';
import styles from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ id, img }) => {
  return (
    <li key={id} className={styles.ImageGalleryItem}>
      <img src={img} className={styles.ImageGalleryItemImage} alt="" />
    </li>
  );
};
PhotosGalleryItem.defaultProps = {
  img: defaultImg,
};
PhotosGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
};
export default PhotosGalleryItem;
