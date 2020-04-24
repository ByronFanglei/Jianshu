import React, { PureComponent } from 'react';
import { WriterWrapper, WriterTitle, WriterItem, WriterFind } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { CSSTransition } from 'react-transition-group'

class Writer extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  //对作者进行分布
  getWriteList() {
    const { User, writepage } = this.props;
    const newList = User.toJS()
    const writeList = []
    if (newList.length) {
      for (let i = (writepage - 1) * 5; i < ((newList.length - i) > 0 ? (writepage * 5) : (newList.length - i)); i++) {
        writeList.push(
          <WriterItem key={newList[i].id}>
            <img className="writeimg" src={newList[i].avatar_source} alt=""></img>
            <div className="writediv">
              <p className="divtitle">{newList[i].nickname}</p>
              <p className="divinfo">写了{newList[i].total_wordage}字 - {newList[i].total_likes_count}喜欢</p>
            </div>
            <div className="writetext">
              +关注
                </div>
          </WriterItem>
        )
      }
      return writeList
    }
  }
  //点击切换作者信息
  getSwitchWrite() {
    const { switchWrite, isWrite, writepage, writetotalpage } = this.props;
    return (
      <span className="switch" 
        onClick={() => {switchWrite(writepage, writetotalpage)}}
      >
        <CSSTransition
          in={isWrite}
          timeout={500}
          classNames="switch"
        >
          <span className='iconfont writeSwitch'>&#xe857;</span>
        </CSSTransition>
        换一批
      </span>
    )
  }

  render() {
    return (
      <WriterWrapper>
        <WriterTitle>
          <span className="recom">推荐作者</span>
          {this.getSwitchWrite()}
        </WriterTitle>
        <div>
          {this.getWriteList()}
        </div>
        <WriterFind>
          查看全部 &gt;
        </WriterFind>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  User: state.getIn(['home', 'User']),
  writepage: state.getIn(['home', 'writepage']),
  writetotalpage: state.getIn(['home', 'writetotalpage']),
  isWrite: state.getIn(['home', 'isWrite'])
})

const mapProps = (dispatch) => {
  return {
    switchWrite(writepage ,writetotalpage) {
      dispatch(actionCreators.changeWriteSwitch(true))
      setTimeout(() => {
        dispatch(actionCreators.changeWriteSwitch(false))
      },500)
      if (writepage < writetotalpage) {
        dispatch(actionCreators.replacePageWrite(writepage + 1))
      } else {
        dispatch(actionCreators.replacePageWrite(1))
      }
    }
  }
}

export default connect(mapState, mapProps)(Writer);
