import axios from 'axios';

export const PROGRESS_DATA_URL = 'http://pb-api.herokuapp.com/bars';

export const progressBarService = () => {
  return new Promise((resolve, reject) => {
    axios.get(PROGRESS_DATA_URL).then(response => {
      if (response.data) {
        resolve(response.data);
      } else {
        reject(response);
      }
    });
  });
};
