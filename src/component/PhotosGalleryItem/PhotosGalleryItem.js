import styles from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ id, img }) => {
  return (
    <li key={id} className={styles.ImageGalleryItem}>
      <img src={img} className={styles.ImageGalleryItemImage} alt="" />
    </li>
  );
};
export default PhotosGalleryItem;
