import * as actionType from './actionType';
import axios from 'axios';
import { fromJS } from 'immutable';

export const enterCode = () => ({
  type: actionType.ENTER_CODE
});
export const leaveCode = () => ({
  type: actionType.LEAVE_CODE
});
const initHomeData = (data) => ({
  type: actionType.CHANGE_HOME_DATA,
  code: fromJS(data.code),
  Recom: fromJS(data.Recom),
  User: fromJS(data.User),
  articleList: fromJS(data.articleList),
  topicList: fromJS(data.topicList),
  writetotalpage: Math.ceil((data.User.length) / 5)
});
export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((value) => {
      const data = value.data.data;
        dispatch(initHomeData(data))
    }).catch((reason) => {
      console.log(reason)
    })
  }
};
const MoreList = (data, artpage) => ({
  type: actionType.MORE_LIST,
  //List也会将数据最外层转为immutable数据
  data: fromJS(data),
  artpage
});
export const getMoreList = (artpage) => {
  return(dispatch) => {
    axios.get(`/api/homeList.json?page=${artpage}`).then((value) => {
      const data = value.data.data;
        dispatch(MoreList(data, artpage + 1))
    }).catch((reason) => {
      console.log(reason)
    })
  }
};
export const changeistop = (show) => ({
  type: actionType.CHANGE_IS_TOP,
  show
});
export const changeWriteSwitch = (show) => ({
  type: actionType.CHANGE_WRITE_SWITCH,
  show
});
export const replacePageWrite = (writepage) => ({
  type: actionType.CHANGE_PAGE_WRITE,
  writepage
});