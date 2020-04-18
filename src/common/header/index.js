import React from 'react';
import { Nav, HeaderWrapper, Logo, HeaderInner, InnerItem, InnerInput, Addition, Button, SearchWrapper } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
const Header = (props) => {
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
              in={props.focused}
              timeout={500}
              classNames="slide"
            >
              <InnerInput className={props.focused ? 'focused' : ''}
                onFocus={props.handInputFocus}
                onBlur={props.handInputBlur}
              ></InnerInput>
            </CSSTransition>
            <span className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe653;</span>
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

const mapStoreToProps = (state) => {
  return {
    focused: state.header.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Header);