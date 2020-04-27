import * as actionType from './actionType';
import axios from 'axios';


const changeLogn = (data) => ({
  type: actionType.LOGIN_IN,
  data
});
export const login = (username, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?user=${username}&pass=${password}`).then((value) => {
      const data = value.data.data
      if (data) {
        dispatch(changeLogn(data))
      } else {
        console.log(`登陆失败`)
      }
    }).catch((reason) => {
      console.log(`login数据访问错误${reason}`)
    })
  }
};
export const LoginOut = () => ({
  type: actionType.LOGIN_OUT,
  data: false
})