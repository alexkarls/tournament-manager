import React, { useState } from 'react'

import { Row, Col, Form, Button, Select, Slider, Typography } from 'antd'
import moment from 'moment'
import Score from '../../model/ScoreModel'

const { Text } = Typography
const { Option } = Select

const ScoreForm = ({
  handleSubmit,
  match,
  team1,
  team2,
  players1,
  players2
}) => {
  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState({})

  const start = moment(match.startDateTime)
  const end = moment(match.endDateTime)
  const duration = moment.duration(end.diff(start))
  const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'

  const scoreValue = 1
  let selPlayer = null
  let selDateTime = start

  const onSelectPlayer = player => {
    selPlayer = player
  }

  const onSelectMinute = minutes => {
    selDateTime = moment(start)
      .add(minutes, 'minutes')
      .format(dateTimeFormat)
  }

  const onSelectTeam = team => {
    setTeam(team)
    if (team === team1.id) {
      setPlayers(players1)
    } else {
      setPlayers(players2)
    }
  }

  const preHandleSubmit = event => {
    event.preventDefault()
    const id = Date.now().toString()
    const score = new Score(
      id,
      match.id,
      team,
      selPlayer,
      scoreValue,
      selDateTime
    )
    handleSubmit(score)
  }

  return (
    <>
      <Form onSubmit={preHandleSubmit}>
        <Form.Item>
          <Row>
            <Col>
              <Text>Team</Text>
              <Select onChange={onSelectTeam}>
                <Option value={team1.id}>{team1.name}</Option>
                <Option value={team2.id}>{team2.name}</Option>
              </Select>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Row>
            <Col>
              <Text>Player</Text>
              <Select onChange={onSelectPlayer}>
                {players.map(p => (
                  <Option key={p.id} value={p.id}>
                    {p.name}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row>
            <Col>
              <Text>At minute</Text>
              <Slider
                onChange={onSelectMinute}
                max={duration.asMinutes()}
              ></Slider>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row>
            <Button htmlType='submit' style={{ width: '100%' }}>
              Submit
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </>
  )
}

export default ScoreForm
