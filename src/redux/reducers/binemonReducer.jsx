const INITIAL_STATE = {
  power: '',
}

const binemonReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_POWER':
      return {
        power: action.payload,
      };
    default:
      return state;
  }
}

export default binemonReducer;
