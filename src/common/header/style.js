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
export const Logo = styled.div`
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
  .zoom {
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
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`;
export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  cursor: pointer;
  float: right;
  font-size: 13px;
  .switchicon{
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease;
    transform-origin: center center;
  }
  &:hover{
    color: #333;
  }
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
export const SearchInfoItem = styled.a`
  cursor: pointer;
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin: 0 10px 10px 0;
  font-size: 12px;
  border: 1px solid #ccc;
  color: #787878;
  border-radius: 3px;
  &:hover{
    color: #333;
  }
`;
export const InnerInput = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  padding: 0 35px 0 20px;
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
`;
