import React,{ PureComponent } from 'react';
import { RecomWrapper, RecomItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecomWrapper>
        {
          list.map((item) => (
            <RecomItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
          ))
        }
      </RecomWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'Recom'])
})

export default connect(mapStateToProps)(Recommend);