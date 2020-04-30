import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


const Write = () => {
  const Data = useSelector((state) => {
    return{
      LoginBoolean: state.getIn(['login', 'LoginBoolean'])
    }
  })
  if(Data.LoginBoolean){
    return(
      <div>写文章页面</div>
    )
  }else{
    return <Redirect to='/login' />
  }
}

export default Write;