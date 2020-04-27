import { fromJS } from 'immutable';
import * as actionType from './actionType';

const initStore = fromJS({
  LoginBoolean: false
})

export default (state = initStore, action) => {
  switch (action.type) {
    case actionType.LOGIN_IN:
      return state.set('LoginBoolean', action.data)
    case actionType.LOGIN_OUT:
      return state.set('LoginBoolean', action.data)
    default: return state;
  }
}