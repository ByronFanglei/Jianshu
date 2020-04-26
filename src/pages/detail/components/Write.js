import React, { Fragment, memo } from 'react';
import { WriteAuthor, WriteContent, WriteLine } from '../style';
import { useSelector } from 'react-redux';

const Write = memo(() => {

  const WriteData = useSelector((state) => {
    return {
      data: state.getIn(['detail', 'Write']).toJS()
    }
  })
  const { data } = WriteData
  //作者数据渲染
  const getBooks = () => {
    const res = Object.keys(data)
    const BookObj = []
    if (res.length > 0) {
      // eslint-disable-next-line array-callback-return
      data.WriteContent.map((item, index) => {
        BookObj.push(
          <div key={index}>
            <p className="book">{item.title}</p>
            <p className="read">{item.read}</p>
          </div>
        )
      })
      return BookObj
    }
  }
  
  return (
    <Fragment>
      <WriteAuthor>
        <img src={data.WriteImg} alt="" />
        <div>
          <p>{data.WriteName}<button className="btn"><span>关注</span></button></p>
          <p>总资产{data.WriteTotalPrice} (约{data.WritePrice}元)</p>
        </div>
      </WriteAuthor>
      <WriteLine />
      <WriteContent>
        {getBooks()}
      </WriteContent>
    </Fragment>
  )
})

export default Write;