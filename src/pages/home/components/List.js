import React, { PureComponent, Fragment } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { list, morelist, artpage } = this.props;
    return (
      <Fragment>
        {
          list.map((item, index) => (
            <Link key={index} to="/detail">
              <ListItem key={index}>
                <img className="pic"
                  src={item.get('imgUrl')}
                  alt=""
                />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => { morelist(artpage) }}>加载更多</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  artpage: state.getIn(['home', 'artpage'])
})
const mapDispatchToProps = (dispatch) => ({
  morelist(artpage) {
    dispatch(actionCreators.getMoreList(artpage))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);