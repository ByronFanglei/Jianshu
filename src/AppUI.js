import React,{ Fragment } from 'react';
import { Input, Button, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AppUI = (props) => {
  return(
    <Fragment>
      <div className="example-input">
        <Input size="large" placeholder="输入内容" prefix={<UserOutlined />}
          style={{ width: '600px', margin: '10px' }}
          value={props.inputValue}
          onChange={props.handInputChange}
        />
        <Button ghost onClick={props.handBtnClick}>提交</Button>
      </div>
      <List
        style={{width:'600px',margin:'10px'}}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (<List.Item onClick={(index) => {props.handListDelete(index)}}>{item}</List.Item>)}
      />
    </Fragment>
  )
}

export default AppUI;