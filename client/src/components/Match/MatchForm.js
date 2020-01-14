import React from 'react'
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  Select,
  Typography
} from 'antd'
import moment from 'moment'
import Match from '../../model/MatchModel'

const { Option } = Select
const { Text } = Typography

const AddMatchForm = ({ handleSubmit, teams }) => {
  let team1 = null
  let team2 = null

  const dateFormat = 'YYYY-MM-DD'
  const timeFormat = 'HH:mm:ss'
  const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'

  const preHandleSubmit = event => {
    event.preventDefault()
    const date = event.target[0].value
    const time = event.target[1].value
    const duration = event.target[2].value

    const startDateTime = moment(date + ' ' + time).format(dateTimeFormat)
    const endDateTime = moment(date + ' ' + time)
      .add(duration, 'minutes')
      .format(dateTimeFormat)

    const id = Date.now().toString()
    const match = new Match(id, team1, team2, startDateTime, endDateTime)
    handleSubmit(match)
  }

  const onSelectTeamOne = team => {
    team1 = team
  }

  const onSelectTeamTwo = team => {
    team2 = team
  }

  return (
    <>
      {teams.length > 0 ? (
        <Form onSubmit={preHandleSubmit} style={{ textAlign: 'center' }}>
          <Form.Item>
            <Row>
              <Col span={24}>
                <Text>Date</Text>
                <DatePicker
                  defaultValue={moment(new Date())}
                  format={dateFormat}
                  style={{ width: '100%' }}
                />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row>
              <Col span={12}>
                <Text>Time</Text>
                <TimePicker
                  defaultValue={moment('12:00', timeFormat)}
                  format={timeFormat}
                  width='100%'
                  style={{ width: '100%' }}
                />
              </Col>
              <Col span={12}>
                <Text>Duration (minutes)</Text>
                <Input type='number' defaultValue={60}></Input>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row>
              <Col span={24}>
                <Text>Team 1</Text>
                <Select onChange={onSelectTeamOne}>
                  {teams.map(t => (
                    <Option key={t.id} value={t.id}>
                      {t.name}
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row>
              <Col span={24}>
                <Text>Team 2</Text>
                <Select onChange={onSelectTeamTwo}>
                  {teams.map(t => (
                    <Option key={t.id} value={t.id}>
                      {t.name}
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row>
              <Col span={24}>
                <Button htmlType='submit' style={{ width: '100%' }}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      ) : null}
    </>
  )
}

export default AddMatchForm
