//在redux中引入combineReducers对不同文件中的reducer进行集中管理
import { combineReducers } from 'redux-immutable';
//直接引入reducer对应的文件就可以，在对应的文件中的index文件会引入自己的reducer并且导出，为了避免与主文件的reducer名字冲突，这里可以直接使用as做重命名
import {reducer as headerReducer } from '../common/header/store';
import {reducer as homeReducer } from '../pages/home/store'
import {reducer as detailReducer } from '../pages/detail/store';
import {reducer as loginReducer} from '../pages/login/store';

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});

export default reducer;