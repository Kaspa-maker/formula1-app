import axios from 'axios';

export const getAll = () => {
   return axios('http://localhost:8080/api/drivers')
              .then(resp => resp.data);
};

export const getDriver = driverId => {
  return axios.get(`/api/driver/${driverId}`)
              .then(resp => resp.data);
};

export const add = (newId, newName, newDescription, newLinkInsta, newLinkBackground, newImage) => {
  return axios.post('/api/driver', { id: newId, name: newName, description: newDescription, linkInsta: newLinkInsta, linkBackground: newLinkBackground, image: newImage })
              .then(resp => resp.data);
};