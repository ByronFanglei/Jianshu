import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeWRight, BackTop } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Code from './components/Code';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends PureComponent {
  //跳转页面最上层
  handScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt="" src="https://upload.jianshu.io/admin_banners/web_images/4928/6e9aa1978a269f34cccf0a8971e168ad47b79262.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeWRight>
          <Recommend />
          <Code />
          <Writer />
        </HomeWRight>
        {this.props.isTop ? <BackTop onClick={this.handScrollTop}>&#8593;</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.gethomedata();
    this.bindEvents();
  }
  componentWillUnmount() {
    //当组件销毁后解绑scroll
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  isTop: state.getIn(['home', 'isTop'])
})

const mapDispatch = (dispatch) => ({
  gethomedata() {
    dispatch(actionCreators.getHomeData())
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 500) {
      dispatch(actionCreators.changeistop(true))
    }else{
      dispatch(actionCreators.changeistop(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home);