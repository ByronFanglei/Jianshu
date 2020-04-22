import React,{ Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './style';
import { GlobalIcon } from './statics/iconfont/iconfont';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <GlobalIcon />
          <Header />
          <BrowserRouter>
            <Fragment>
              <Route path='/'exact render={(() => <div>home</div>)}></Route>
              <Route path='/detail' exact render={(() => <div>detail</div>)}></Route>
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App;