import React, { Fragment, memo } from 'react';
import { ArticleTile, ArticleAuthor, ArticleContent } from '../style';
import { useSelector } from 'react-redux';

const Article = memo(() => {
  //获取数据
  const ArticleData = useSelector((store) => {
    return {
      data: store.getIn(['detail', 'Article']).toJS()
    }
  })
  const { data } = ArticleData

  return (
    <Fragment>
      <ArticleTile>{data.title}</ArticleTile>
      <ArticleAuthor>
        <img src={data.AuthorImg} alt="" />
        <div>
          <p>{data.AuthorName}<button className="btn"><span>关注</span></button></p>
          <p>
            {data.AuthorUpData}
            {data.AuthorWords}字数
            {data.AuthorRead}阅读
          </p>
        </div>
      </ArticleAuthor>
      <ArticleContent>
        <img src={data.ContentImg} alt="" />
        <p>{data.ContenOne}</p>
        <p>{data.ContenTwo}</p>
        <blockquote>{data.BookName}</blockquote>
        <h2>书中故事</h2>
        <p>{data.ContenThree}</p>
        <p>{data.ContenFour}</p>
      </ArticleContent>
    </Fragment>
  )
})

export default Article;
