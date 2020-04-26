import axios from 'axios';
import * as actionType from './actionType';
import { fromJS } from 'immutable';

export const getDetailData = (id) => {
    return (dispatch) => {
      axios.get('/api/detail.json?id=' + id).then((value) => {
        const data = value.data.data
        const newData = []
        for (let key in data) {
          const val = data[key].find((item) => {
            return item.id === parseInt(id)
          })
          newData.push(val)
        }
        // console.log(newData[2])
        dispatch(getIdData(newData))
      }).catch((reason) => {
        console.log(`detail数据获取失败：${reason}`)
      })
    }
}
//筛选数据
const getIdData = (data) => ({
  type: actionType.UPDATA_ID_DATA,
  Article: fromJS(data[0]),
  Write: fromJS(data[1]),
  Recom: fromJS(data[2])
})