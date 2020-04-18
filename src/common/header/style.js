//通过styled-components创建一个标记
import styled from 'styled-components';
//引入图片需要定义标记
import logoPng from '../../statics/logo.png';
//设置自定义组件Nav拥有div属性并赋予对应css属性
export const Nav = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const HeaderWrapper = styled.div`
  position: relative;
  max-width: 1440px;
  height: 56px;
  margin: 0 auto;
`;
//可以在这里直接对标签进行属性的设置
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  background: url(${logoPng});
  background-size: contain;
`;
export const HeaderInner = styled.div`
  width: 960px;
  height: 56px;
  margin: 0 auto;
`;
export const InnerItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
  }
  &.action{
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
      background: #999;
    }
  }
`;
export const InnerInput = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  padding 0 35px 0 20px;
  box-sizing: border-box;
  margin: 9px 0 0 20px;
  font-size: 15px;
  background: #eee;
  border: none;
  outline: none;
  border-radius: 19px;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 340px;
  }
  &.slide-enter {
    transition: all .5s ease-out;
  }
  &.slide-enter-active {
    width: 340px;
  }
  &.slide-exit {
    transition: all .5s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin: 9px 0 0 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg{
    color: #ec6149;
  }
  &.writing{
    color: #fff;
    background: #ec6149;
  }
`