import { useState, useEffect } from 'react';
import { fetchPhotos } from './services/photosAPI';

import ChangeOptions from './component/ChangeOptions';
import PhotosGallery from './component/PhotosGallery';
import Button from './component/Button';
import Spin from './component/Loader';
import Message from './component/Message';

function App() {
  const [roverChange, setRoverChange] = useState('');
  const [cameraChange, setCameraChange] = useState('');
  const [dayChange, setDayChange] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (dayChange === '') {
      return;
    }
    buttonLoadMore();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roverChange, cameraChange, dayChange]);

  useEffect(() => {
    if (page > 1) {
      scrollWindow();
    }
  }, [page]);

  const onChangeOptions = (rover, camera, day) => {
    setRoverChange(rover);
    setCameraChange(camera);
    setDayChange(day);
    setPhotos([]);
  };

  const buttonLoadMore = () => {
    setIsLoading(true);

    fetchPhotos(roverChange, cameraChange, dayChange, page)
      .then(res => {
        if (res.data.photos.length > 0) {
          setPhotos(photos => [...photos, ...res.data.photos]);
          setPage(page => page + 1);
          setMessage('');
        } else {
          setMessage(
            'В цей сонячний (напевно) марсіанський день ровер був вихідний. Спробуй обрати інший день!',
          );
        }
      })
      .catch(error => {
        alert('Ой-йой! Марсіани нас знайшли!');
      })
      .finally(() => setIsLoading(false));
  };

  const scrollWindow = () => {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ChangeOptions onSubmit={onChangeOptions} />
      <PhotosGallery images={photos} />
      {photos.length > 24 && !isLoading && <Button onClick={buttonLoadMore} />}
      {isLoading && <Spin />}
      <Message text={message} />
    </>
  );
}

export default App;
