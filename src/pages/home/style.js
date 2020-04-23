import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img{
    width: 625px;
  }
`;
export const HomeWRight = styled.div`
  width: 280px;
  float: right;
  margin-left: 15px;
  padding-top: 30px;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;
export const ListItem = styled.div`
  margin-left: -18px; 
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display: block;
    width: 150px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  margin-left: 18px;
  width: 458px;
  float: left;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;
export const RecomWrapper = styled.div`
  width: 280px;
`;
export const RecomItem = styled.div`
  margin-bottom: 6px;
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;
//二维码部分
export const CodeAll = styled.div`
  position: relative;
`;
export const CodeWrapper = styled.a`
  overflow: hidden;
  display: table;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  padding: 10px 22px;
  margin-bottom: 30px;
`;
export const CodeImg = styled.div`
  width: 60px;
  height: 60px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  float: left;
`;
export const Codetext = styled.div`
position: relative;
  padding-left: 7px;
  display: table-cell;
  vertical-align: middle;
  .down{
    color: #333;
    font-size: 15px;
    margin-bottom: 10px;
  }
  .mes{
    color: #999;
    font-size: 13px;
  }
`;
export const CodeModule = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -186px;
  left: 40px;
  width: 180px;
  height: 180px;
  background: #fff;
  border-radius: 6px;
  border: 1px solid #666;
  &:after{
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 8px solid #ccc;
    font-size: 0;
    line-height: 0;
    transform:  translateX(-50%);
  }
`;
export const CodeInfo = styled.div`
  width: 160px;
  height: 160px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;
//推荐作者部分
export const WriterWrapper = styled.div`
  width: 280px;
`;
export const WriterTitle = styled.div`
  overflow: hidden;
  width: 100%;
  >span{
    color: #969696;
    font-size: 14px;
  }
  .switch{
    float: right;
  }
`;
export const WriterItem = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .writeimg{
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .writediv{
    margin: 0 10px;
    width: 150px;
    font-size: 14px;
    .divtitle{
      color: #333;
      margin-bottom: 5px;
    }
    .divinfo{
      color: #969696;
      font-size: 12px;
    }
  }
  .writetext{
    color: #42c02e;
  }
`;
export const WriterFind = styled.a`
  padding: 7px 7px 7px 12px;
  width: 280px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: block;
  text-align: center;
  margin-top: 10px;
  box-sizing: border-box;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height:60px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`;
