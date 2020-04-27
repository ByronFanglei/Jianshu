import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LoginWrapper, LoginTitle } from './style';
import { Input, Button, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { actionCreators } from './store'

const Login = () => {
  const Data = useSelector((state) => {
    return {
      login: state.getIn(['login', 'LoginBoolean'])
    }
  })
  const dispatch = useDispatch()
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 20,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 9,
      span: 16,
    },
  };
  const onFinish = values => {
    dispatch(actionCreators.login(values.username, values.password))
  };
  if (!Data.login) {
    return (
      <LoginWrapper>
        <LoginTitle>
          <span className="login">登录</span>
        </LoginTitle>
        <Form
          {...layout}
          style={{ margin: "20px auto" }}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名："
            name="username"
            rules={[
              {
                required: true,
                message: '请正确输入账号！！！',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="密码："
            name="password"
            rules={[
              {
                required: true,
                message: '请正确输入密码！！！',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" shape="round" >
              登录
            </Button>
          </Form.Item>
        </Form>

      </LoginWrapper>
    )
  }else{
    //路由重定向
    return <Redirect to="/" />
  }

}

export default Login;
