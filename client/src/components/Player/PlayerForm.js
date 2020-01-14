import React from 'react'

import { Form, Input, Button } from 'antd'

const PlayerForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input placeholder='Name' />
      </Form.Item>
      <Form.Item>
        <Input placeholder='Number' />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' style={{ width: '100%' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default PlayerForm
