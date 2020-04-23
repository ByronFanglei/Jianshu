import React, { PureComponent } from 'react';
import { WriterWrapper, WriterTitle, WriterItem, WriterFind } from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {

  render() {
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriterTitle>
          <span className="recom">推荐作者</span>
          <span className="switch"><span className='iconfont'>&#xe857;</span>换一批</span>
        </WriterTitle>
        <div>
          {
            list.map((item) => (
              <WriterItem key={item.get('id')}>
                <img className="writeimg" src={item.get('avatar_source')} alt=""></img>
                <div className="writediv">
                  <p className="divtitle">{item.get('nickname')}</p>
            <p className="divinfo">写了{item.get('total_wordage')}字 - {item.get('total_likes_count')}喜欢</p>
                </div>
                <div className="writetext">
                  +关注
            </div>
              </WriterItem>
            ))
          }
        </div>
        <WriterFind>
          查看全部 &gt;
        </WriterFind>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'User']),
  page: state.getIn(['home', 'page']),
  total: state.getIn(['home', 'total'])
})

export default connect(mapState, null)(Writer);