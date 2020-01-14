import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Typography } from 'antd'
import { getPlayers } from '../../util/playerApiCalls'

const { Text } = Typography

const Team = ({ team }) => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetchPlayer = async () => {
      const res = await getPlayers(team.id)
      setPlayers(res.data)
    }
    fetchPlayer()
  }, [team.id])

  return (
    <>
      <Card title={team.name}>
        <Row>
          <Col span={12}>
            <Text>Location: {team.country}</Text>
          </Col>
          <Col span={12}>
            <Text>Players: {players.length}</Text>
          </Col>
        </Row>
        <br />
        <Row>
          <Button>
            <Link
              to={{
                pathname: `/team/${team.id}`,
                state: {
                  team: team
                }
              }}
            >
              Go to Team
            </Link>
          </Button>
        </Row>
      </Card>
    </>
  )
}

export default Team
