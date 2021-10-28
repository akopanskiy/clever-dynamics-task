import PhotosGalleryItem from '../PhotosGalleryItem';
import styles from './PhotosGallery.module.css';

const PhotosGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, img_src }) => (
        <PhotosGalleryItem key={id} id={id} img={img_src} />
      ))}
    </ul>
  );
};
export default PhotosGallery;
