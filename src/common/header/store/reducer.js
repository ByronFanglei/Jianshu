import * as actionType from './actionType';
import { fromJS } from 'immutable';
const initState = fromJS({
  focused: false
})

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.CHANGE_INPUT_FOCUS:
      return state.set('focused', true)
    case actionType.CHANGE_INPUT_BLUR:
      return state.set('focused', false)
    case actionType.INIT_LIST:
      return state.set('list', action.data);

    default: return state;
  }
};