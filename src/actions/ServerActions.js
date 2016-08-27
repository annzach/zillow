import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveHouse(house) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_HOUSE',
      house
    })
  }

}

export default ServerActions;