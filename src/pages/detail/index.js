import React,{ useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { DetailWrapper, DetailLeft, DetailWrite, DetailRecom } from './style';
import Write from './components/Write';
import Article from './components/Article';
import Recom from './components/Recom';
import { actionCreators } from './store';

const Detail = memo((props) => {
  //获取对应的id值
  const id = props.match.params.id
  const dispatch = useDispatch()
  //通过ajax获取数据
  useEffect(() => {
    dispatch(actionCreators.getDetailData(id))
  })
  
  return (
    <DetailWrapper>
      <DetailLeft>
        <Article />
      </DetailLeft>
      <DetailWrite>
        <Write />
      </DetailWrite>
      <DetailRecom>
        <Recom />
      </DetailRecom>
    </DetailWrapper>
  )
})
export default Detail;