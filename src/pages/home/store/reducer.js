import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
  page: 1,
  total: 1,
  artpage: 1,
  isCode: false,
  isTop: false,
  code: "",
  topicList: [],
  articleList: [],
  Recom: [],
  User: []
})

const changeHomeData = (state, action) => {
  return state.merge({
    code: action.code,
    topicList: action.topicList,
    articleList: action.articleList,
    Recom: action.Recom,
    User: action.User
  })
}

const moreList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.data),
    artpage: action.artpage
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.ENTER_CODE:
      return state.set('isCode', true)
    case actionType.LEAVE_CODE:
      return state.set('isCode', false)
    case actionType.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case actionType.MORE_LIST:
      return moreList(state, action)
    case actionType.CHANGE_IS_TOP:
      return state.set('isTop', action.show)
    default: return state;
  }
}
