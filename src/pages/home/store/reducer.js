import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
  page: 1,
<<<<<<< HEAD
  //加载更多页面
=======
  total: 1,
>>>>>>> aa800f881cd328439bc6da2b7047067c0e97dc29
  artpage: 1,
  isCode: false,
  isTop: false,
  code: "",
  topicList: [],
  articleList: [],
  Recom: [],
<<<<<<< HEAD
  User: [],
  writepage: 1,
  writetotalpage: 1,
  isWrite: false
=======
  User: []
>>>>>>> aa800f881cd328439bc6da2b7047067c0e97dc29
})

const changeHomeData = (state, action) => {
  return state.merge({
    code: action.code,
    topicList: action.topicList,
    articleList: action.articleList,
    Recom: action.Recom,
<<<<<<< HEAD
    User: action.User,
    writetotalpage: action.writetotalpage
=======
    User: action.User
>>>>>>> aa800f881cd328439bc6da2b7047067c0e97dc29
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
<<<<<<< HEAD
    case actionType.CHANGE_WRITE_SWITCH:
      return state.set('isWrite', action.show)
    case actionType.CHANGE_PAGE_WRITE:
      return state.set('writepage', action.writepage)
=======
>>>>>>> aa800f881cd328439bc6da2b7047067c0e97dc29
    default: return state;
  }
}
