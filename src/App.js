import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './style';
import { GlobalIcon } from './statics/iconfont/iconfont';
import Header from './common/header';


class App extends Component {
  render() {
    return(
      <Provider store={store}>
          <GlobalStyle />
          <GlobalIcon />
          <Header />
      </Provider>
    )
  }
}

export default App;