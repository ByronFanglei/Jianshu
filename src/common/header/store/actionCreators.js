import * as actionType  from './actionType';
import axios from 'axios';
import { fromJS } from 'immutable';

const initList = (data) => ({
  type: actionType.INIT_LIST,
  //这里需要转成immutable对象，因为在reducer中原始数组被转为immutable对象
  data: fromJS(data),
  totalPage: Math.ceil((data.length) / 10)
});
export const searchFocus = () => ({
  type: actionType.CHANGE_INPUT_FOCUS
});
export const searchBlur = () => ({
  type: actionType.CHANGE_INPUT_BLUR
});
export const getList = () => {
  return(dispatch) => {
    axios.get('/api/headerList.json').then((value) => {
      const data = value.data;
      if(data.success){
        const listData = data.data;
        dispatch(initList(listData))
      }
    }).catch((reason) => {
      console.log(reason)
    })
  }
};
export const mouseEnter = () => ({
  type: actionType.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: actionType.MOUSE_LEAVE
});
export const replacePage = (page) => ({
  type: actionType.CHANGE_PAGE,
  page
});
export const changeValue = (value) => ({
  type: actionType.CHANGE_VALUE,
  value
});