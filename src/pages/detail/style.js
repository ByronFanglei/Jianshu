import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 10px 16px 0;
`;
export const DetailLeft = styled.div`
  width: 706px;
  float: left;
  background: #fafafa;
  padding: 24px;
  box-sizing: border-box;
`;
export const DetailWrite = styled.div`
  overflow: hidden;
  width: 276px;
  float: right;
  background: #fafafa;
  padding: 16px;
  box-sizing: border-box;
`;
export const DetailRecom = styled.div`
  width: 276px;
  float: right;
  background: #fafafa;
  padding: 16px;
  box-sizing: border-box;
  margin-top: 16px;
`;
//文章部分
export const ArticleTile = styled.div`
  color: #404040;
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: 600;
`;
export const ArticleAuthor = styled.div`
  color: #404040;
  margin-bottom: 32px;
  overflow: hidden;
  img{
    width: 48px;
    border-radius: 50%;
    float: left;
  }
  div{
    float: left;
    margin-left: 8px;
    p{
      margin-bottom: 6px;
      font-size: 13px;
      .btn{
      border: 1px solid #ec7259;
      border-radius: 50px;
      color: #ec7259;
      padding: 2px 9px;
      margin-left: 5px;
      cursor: pointer;
    }
    }
  }
`;
export const ArticleContent = styled.div`
  color: #404040;
  img{
    display: block;
    width: 100%;
    padding: 0 0 25px;
  }
  p{
    font-size: 16px;
    color: #404040;
    margin-bottom: 20px;
    font-weight: 400;
    line-height: 1.8;
  }
  blockquote{
    border-left: 6px solid #bfc;
    padding: 20px;
    margin-bottom: 20px;
    background: #fafafa;
  }
  h2{
    font-size: 24px;
    color: #404040;
    margin-bottom: 16px;
    font-weight: 600;
  }
`;
//作者部分
export const WriteAuthor = styled.div`
  overflow: hidden;
  width: 100%;
  img{
    width: 45px;
    border-radius: 50%;
    float: left;
  }
  div{
    float: left;
    margin-left: 8px;
    p{
      margin-bottom: 6px;
      font-size: 12px;
      .btn{
      border: 1px solid #ec7259;
      border-radius: 50px;
      color: #ec7259;
      padding: 2px 9px;
      margin-left: 5px;
      cursor: pointer;
    }
    }
  }
`;
export const WriteLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: #eee;
`;
export const WriteContent = styled.div`
  div{
    margin-top: 16px;
    .book{
      font-size: 14px;
      color: #2d2d2d;
      margin-bottom: 4px;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
    .read{
      font-size: 12px;
      color: #969696;
    }
  }
`;
//推荐阅读
export const RecomReac = styled.blockquote`
  border-left: 4px solid #ec7259;
  color: #404040;
  font-size: 16px;
  padding: 0 5px;
`;
export const RecomContent = styled.div`
  div{
    margin-top: 16px;
    .book{
      font-size: 14px;
      color: #2d2d2d;
      margin-bottom: 4px;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
    .read{
      font-size: 12px;
      color: #969696;
    }
  }
`;