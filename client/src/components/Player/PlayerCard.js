import React, { useState } from 'react'
import { Row, Col, Card, Button, Typography } from 'antd'
import { deletePlayer, updatePlayer } from '../../util/playerApiCalls'
import PlayerForm from './PlayerForm'

const { Text } = Typography

const Player = ({ player, players, setPlayers }) => {
  const [showUpdate, setShowUpdate] = useState(false)

  const handleDelete = event => {
    event.preventDefault()
    const updated = []
    players.forEach(p => {
      if (p.number !== player.number) updated.unshift(p)
    })
    setPlayers(updated)
    deletePlayer({ player })
  }

  const handleUpdateShowForm = () => {
    setShowUpdate(!showUpdate)
  }

  const handleUpdatePlayerForm = event => {
    event.preventDefault()
    const name = event.target[0].value
    const number = event.target[1].value
    const indexOf = players.indexOf(player)
    player = {
      id: player.id,
      name: name,
      number: number,
      teamId: player.teamId
    }
    const updated = []
    players.forEach((p, i) => {
      if (i === indexOf) {
        updated.push(player)
      } else {
        updated.push(p)
      }
    })
    updatePlayer({ player })
    setPlayers(updated)
    setShowUpdate(!showUpdate)
  }

  return (
    <>
      <Card title={player.name}>
        <Row>
          <Col>
            <Text>Number: {player.number}</Text>
          </Col>
        </Row>

        <br />

        <Row>
          <Button onClick={handleUpdateShowForm}>Update</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Row>

        {showUpdate && (
          <>
            <br />
            <PlayerForm handleSubmit={handleUpdatePlayerForm}></PlayerForm>
          </>
        )}
      </Card>
    </>
  )
}

export default Player
