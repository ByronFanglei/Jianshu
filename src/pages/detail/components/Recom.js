import React, { Fragment, memo } from 'react';
import { RecomReac, RecomContent } from '../style';
import { useSelector } from 'react-redux';

const Recom = memo(() => {

  const RecomData = useSelector((store) => {
    return {
      data: store.getIn(['detail', 'Recom']).toJS()
    }
  })
  const { data } = RecomData
  const getRecomData = () => {
    const ref = Object.keys(data)
    const RecomBook = []
    if (ref.length > 0) {
      // eslint-disable-next-line array-callback-return
      RecomData.data.RecomContent.map((item, index) => {
        RecomBook.push(
          <div key={index}>
            <p className="book">{item.title}</p>
            <p className="read">{item.read}</p>
          </div>
        )
      })
      return RecomBook
    }
  }

  return (
    <Fragment>
      <RecomReac>推荐阅读</RecomReac>
      <RecomContent>
        {getRecomData()}
      </RecomContent>
    </Fragment>
  )
})

export default Recom;