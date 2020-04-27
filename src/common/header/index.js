import React, { Component } from 'react';
import {
  Nav, HeaderWrapper, Logo, HeaderInner, InnerItem, InnerInput, Addition, Button,
  SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
  SearchInfoList
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';

class Header extends Component {
  getListArea() {
    const { focused, list, page, mouseenter, mouseleave, mouse, replacepage, totalPage, clickvalue } = this.props;
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem onClick={() => clickvalue(newList[i])} key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouse) {
      return (
        <SearchInfo
          onMouseEnter={mouseenter}
          onMouseLeave={mouseleave}
        >
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch onClick={() => replacepage(page, totalPage, this.Icon)}>
              <span ref={(icon) => { this.Icon = icon }} className='iconfont switchicon'>&#xe857;</span>
            换一批
          </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, handInputFocus, handInputBlur, list, inputValue, changevalue, login, loginOut } = this.props;
    return (
      <Nav>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <HeaderInner>
            <InnerItem className="left action">
              <span className="iconfont">&#xe711;</span>
                首页
              </InnerItem>
            <InnerItem className="left">
              <span className="iconfont">&#xe625;</span>
                下载APP
            </InnerItem>
            {
              login ?
                <InnerItem onClick={loginOut} className="right">退出</InnerItem> :
                <Link to="/login">
                  <InnerItem className="right">登录</InnerItem>
                </Link>

            }
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
                  value={inputValue}
                  onChange={changevalue}
                  onFocus={() => handInputFocus(list)}
                  onBlur={handInputBlur}
                ></InnerInput>
              </CSSTransition>
              <span className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe653;</span>
              {this.getListArea()}
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
    inputValue: state.getIn(['header', 'inputValue']),
    focused: state.getIn(['header', 'focused']),
    // focused: state.get('header').get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouse: state.getIn(['header', 'mouse']),
    login: state.getIn(['login', 'LoginBoolean'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    mouseenter() {
      dispatch(actionCreators.mouseEnter())
    },
    mouseleave() {
      dispatch(actionCreators.mouseLeave())
    },
    replacepage(page, totalPage, icon) {
      let originAngle = icon.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0;
      }
      icon.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.replacePage(page + 1))
      } else {
        dispatch(actionCreators.replacePage(1))
      }
    },
    clickvalue(value) {
      dispatch(actionCreators.changeValue(value));
    },
    changevalue(event) {
      dispatch(actionCreators.changeValue(event.target.value));
    },
    loginOut() {
      dispatch(loginActionCreators.LoginOut())
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Header);