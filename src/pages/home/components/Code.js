import React, { PureComponent } from 'react';
import { CodeWrapper, CodeImg, Codetext, CodeModule, CodeAll, CodeInfo } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class Code extends PureComponent {

  getCodeArea() {
    const { isCode, code } = this.props;
    if (isCode) {
      return (
        <CodeModule>
          <CodeInfo imgUrl={code} />
        </CodeModule>
      )
    }
  }

  render() {
    const { code, mouseenter, mouseleave } = this.props;
    return (
      <CodeAll>
        <CodeWrapper
          onMouseEnter={mouseenter}
          onMouseLeave={mouseleave}
        >
          <CodeImg imgUrl={code} />
          <Codetext>
            <p className="down">下载简书APP &gt;</p>
            <p className="mes">随时随地发现和创作内容</p>
          </Codetext>
        </CodeWrapper>
        {this.getCodeArea()}
      </CodeAll>
    )
  }
}

const mapState = (state) => ({
  code: state.getIn(['home', 'code']),
  isCode: state.getIn(['home', 'isCode'])
})
const mapDispatch = (dispatch) => {
  return {
    mouseenter() {
      dispatch(actionCreators.enterCode())
    },
    mouseleave() {
      dispatch(actionCreators.leaveCode())
    }
  }
}


export default connect(mapState, mapDispatch)(Code);