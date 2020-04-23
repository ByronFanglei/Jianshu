import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
  page: 1,
  //加载更多页面
  artpage: 1,
  isCode: false,
  isTop: false,
  code: "",
  topicList: [],
  articleList: [],
  Recom: [],
  User: [],
  writepage: 1,
  writetotalpage: 1,
  isWrite: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    code: action.code,
    topicList: action.topicList,
    articleList: action.articleList,
    Recom: action.Recom,
    User: action.User,
    writetotalpage: action.writetotalpage
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
    case actionType.CHANGE_WRITE_SWITCH:
      return state.set('isWrite', action.show)
    case actionType.CHANGE_PAGE_WRITE:
      return state.set('writepage', action.writepage)
    default: return state;
  }
}
