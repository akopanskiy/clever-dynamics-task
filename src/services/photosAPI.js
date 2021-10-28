import axios from 'axios';

const URL = 'https://api.nasa.gov/mars-photos/api/v1/';
const KEY = 'zQ3Fv8lvhr2Ksbaj9jD3shvNbqfu1708SYqLSukS';

export const fetchPhotos = (rover, camera, day, page) => {
  return axios.get(
    `${URL}rovers/${rover}/photos?sol=${day}
      &camera=${camera}&page=${page}&api_key=${KEY}`,
  );
};
