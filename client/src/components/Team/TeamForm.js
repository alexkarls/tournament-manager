import React from 'react'
import { Form, Input, Button, Select, Typography } from 'antd'

import Team from '../../model/TeamModel'

const { Option } = Select
const { Text } = Typography

const MemberForm = ({ handleSubmit, team }) => {
  let country = null

  const preHandleSubmit = event => {
    event.preventDefault()
    const name = event.target[0].value
    let t = null
    if (team) {
      t = new Team(team.id, name, country)
    } else {
      const id = Date.now().toString()
      t = new Team(id, name, country)
    }
    handleSubmit(t)
  }

  const onSelectCountry = selected => {
    country = selected
  }

  return (
    <>
      <Form onSubmit={preHandleSubmit} style={{ textAlign: 'center' }}>
        <Form.Item>
          <Text>Name</Text>
          <Input placeholder='Team name' />
        </Form.Item>

        <Form.Item>
          <Select onChange={onSelectCountry}>
            <Option value='Sweden'>Sweden</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button htmlType='submit' style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default MemberForm
