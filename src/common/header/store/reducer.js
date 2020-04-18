import * as actionType from './actionType';
const initState = ({
  focused: false
})

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionType.CHANGE_INPUT_FOCUS:
      newState.focused = true;
      return newState;
    case actionType.CHANGE_INPUT_BLUR:
      newState.focused = false;
      return newState;


    default: return state;
  }
};