import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography } from 'antd'
import { getRecentScores } from '../../util/scoreApiCalls'
import { getTeams } from '../../util/teamApiCalls'

import moment from 'moment'

const dateTimeFormat = 'YYYY-MM-DD HH:mm'

const { Text } = Typography

const RecentScoreEvent = () => {
  const [scores, setScores] = useState([])
  const [teams, setTeams] = useState([])
  useEffect(() => {
    const fetchRecentScores = async () => {
      const res = await getRecentScores()
      setScores(res.data)
    }
    const fetchTeams = async () => {
      const res = await getTeams()
      setTeams(res.data)
    }
    fetchRecentScores()
    fetchTeams()
  }, [])

  const findTeam = teamId => {
    return teams.find(t => t.id === teamId)
  }

  return (
    <>
      {scores.map((score, i) => (
        <Card key={i} title='Score'>
          {findTeam(score.team_id) !== undefined ? (
            <Row>
              <Col>
                <Text>{findTeam(score.team_id).name}</Text>
              </Col>
            </Row>
          ) : null}

          <br />

          <Row>
            <Col span={12}>
              <Text>Player: {score.name}</Text>
            </Col>
            <Col span={12}>
              <Text>Number: {score.number}</Text>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <Text>
                Time: {moment(score.date_time).format(dateTimeFormat)}
              </Text>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  )
}

export default RecentScoreEvent
