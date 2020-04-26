import { fromJS } from 'immutable';
import * as actionType from './actionType';

const DefauleData = fromJS({
  Article: [],
  Write: [],
  Recom: []
})

export default (state = DefauleData, action) => {
  switch (action.type) {
    case actionType.UPDATA_ID_DATA:
      return state.merge({
        Article: action.Article,
        Write: action.Write,
        Recom: action.Recom
      })

    default: return state;
  }
}