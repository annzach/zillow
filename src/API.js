import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
    createHouse(house) {
      axios.post(`/api/houses`,house)
         .then(res => res.data)
         .then(ServerActions.receiveHouse)
         .catch(console.error)
  },
}

export default API;