import React,{ Component } from 'react';
import store from './store';
import { gethandInputChange,gethandBtnClick,gethandListDelete } from './store/actionCreators';
import AppUI from './AppUI';
import 'antd/dist/antd.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state=store.getState();
    this.handInputChange = this.handInputChange.bind(this);
    this.handNewState = this.handNewState.bind(this);
    this.handBtnClick = this.handBtnClick.bind(this);
    this.handListDelete = this.handListDelete.bind(this);
    store.subscribe(this.handNewState);
  }

  render() {
    return (
      <AppUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handInputChange={this.handInputChange}
        handBtnClick={this.handBtnClick}
        handListDelete={this.handListDelete}
      />
    )
  }
  componentDidMount() {
    axios.get('/api/list.json').then((res) => {
      console.log(res)
    })
  }

  handInputChange(event) {
    const action = gethandInputChange(event.target.value);
    store.dispatch(action);
  }
  handBtnClick() {
    const action = gethandBtnClick();
    store.dispatch(action);
  }
  handListDelete(index) {
    const action = gethandListDelete(index);
    store.dispatch(action);
  }

  handNewState() {
    this.setState(store.getState());
  }
}

export default App;