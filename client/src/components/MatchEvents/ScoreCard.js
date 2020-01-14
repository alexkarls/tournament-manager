import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Button } from 'antd'
import { getPlayer } from '../../util/playerApiCalls'
import { getTeam } from '../../util/teamApiCalls'

import moment from 'moment'

const ScoreCard = ({ score, handleDelete }) => {
  const [team, setTeam] = useState({})
  const [player, setPlayer] = useState({})

  const timeFormat = 'HH:mm'

  useEffect(() => {
    const fetchPlayer = async () => {
      const res = await getPlayer(score.playerId)
      const player = res.data[0]
      setPlayer(player)
      // Should make a "PlayerModel" to avoid ('team_id')
      fetchTeam(player.team_id)
    }

    // Called in "const fetchPlayer"
    const fetchTeam = async teamId => {
      const res = await getTeam(teamId)
      setTeam(res.data[0])
    }
    fetchPlayer()
  }, [score.playerId])

  const preHandleDelete = () => {
    handleDelete(score)
  }

  return (
    <div>
      {team && (
        <Card title={'Score: ' + team.name}>
          {player && (
            <Row>
              <Col>Player: {player.name}</Col>
            </Row>
          )}

          <br />

          <Row>
            <Col>Number: {player.number}</Col>
          </Row>

          <br />

          <Row>
            <Col>Time: {moment(score.dateTime).format(timeFormat)}</Col>
          </Row>

          <br />

          <Button onClick={preHandleDelete} style={{ letterSpacing: '1px' }}>
            DELETE
          </Button>
        </Card>
      )}
    </div>
  )
}

export default ScoreCard
