import React, { Component } from 'react';
import {
  Nav, HeaderWrapper, Logo, HeaderInner, InnerItem, InnerInput, Addition, Button,
  SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
  SearchInfoList
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Header extends Component {
  getListArea() {
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              //这里需要对数组加空值兼容，会调用两次，可以console测试
              (list || []).map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, handInputFocus, handInputBlur } = this.props;
    return (
      <Nav>
        <HeaderWrapper>
          <Logo />
          <HeaderInner>
            <InnerItem className="left action">
              <span className="iconfont">&#xe711;</span>
                首页
              </InnerItem>
            <InnerItem className="left">
              <span className="iconfont">&#xe625;</span>
                下载APP
              </InnerItem>
            <InnerItem className="right">登录</InnerItem>
            <InnerItem className="right">
              <span className="iconfont">&#xe636;</span>
            </InnerItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={500}
                classNames="slide"
              >
                <InnerInput className={focused ? 'focused' : ''}
                  onFocus={handInputFocus}
                  onBlur={handInputBlur}
                ></InnerInput>
              </CSSTransition>
              <span className={focused ? 'iconfont focused' : 'iconfont'}>&#xe653;</span>
              {
                this.getListArea()
              }
            </SearchWrapper>
          </HeaderInner>
          <Addition>
            <Button className="writing">
              <span className="iconfont">&#xe6e5;</span>
                写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </Nav>
    )
  }


}

const mapStoreToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    // focused: state.get('header').get('focused')
    list: state.getIn(['header', 'list'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Header);