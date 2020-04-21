import * as actionType from './actionType';
import { fromJS } from 'immutable';
const initState = fromJS({
  inputValue: '',
  focused: false,
  mouse: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.CHANGE_INPUT_FOCUS:
      return state.set('focused', true)
    case actionType.CHANGE_INPUT_BLUR:
      return state.set('focused', false)
    case actionType.INIT_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case actionType.MOUSE_ENTER:
      return state.set('mouse', true)
    case actionType.MOUSE_LEAVE:
      return state.set('mouse', false)
    case actionType.CHANGE_PAGE:
      return state.set('page', action.page)
    case actionType.CHANGE_VALUE:
      return state.set('inputValue', action.value)
    default: return state;
  }
};