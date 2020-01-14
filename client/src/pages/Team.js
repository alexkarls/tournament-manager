import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Row, Col, Button, Typography } from 'antd'
import TeamView from '../components/Team/TeamView'
import PlayerForm from '../components/Player/PlayerForm'
import PlayerCards from '../components/Player/PlayerCards'
import { getPlayers, addPlayer } from '../util/playerApiCalls'
import { getTeam } from '../util/teamApiCalls'

const { Title } = Typography

const Team = () => {
  const [team, setTeam] = useState({})
  const [players, setPlayers] = useState([])
  const [showPlayerForm, setShowPlayerForm] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await getTeam(id)
        setTeam(res.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    const fetchPlayers = async () => {
      try {
        if (id) {
          const res = await getPlayers(id)
          setPlayers(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchTeam()
    fetchPlayers()
  }, [id])

  const handleAddPlayerForm = async event => {
    event.preventDefault()
    try {
      const id = Date.now().toString()
      const name = event.target[0].value
      const number = Number(event.target[1].value)
      if (isNaN(number)) {
        throw new Error()
      }
      const player = { id: id, name: name, number: number, teamId: team.id }
      addPlayer({ player })

      // Add to top...

      const updated = []
      players.forEach(p => {
        updated.push(p)
      })
      updated.unshift(player)
      setPlayers(updated)

      /* Or fetch...

      setTimeout(async () => {
        const players = await getPlayers(id)
        setPlayers(players.data)
      }, 100)

      */
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {team ? (
        <>
          <br />

          <Title level={1}>Team</Title>
          <Title level={2}>{team.name}</Title>
          <Row>
            <Col offset={8} span={8}>
              <TeamView team={team} setTeam={setTeam}></TeamView>
            </Col>
          </Row>

          <br />

          <Row>
            <Col offset={8} span={8}>
              <Button onClick={() => setShowPlayerForm(!showPlayerForm)}>
                New Player
              </Button>
            </Col>
          </Row>

          <br />

          {showPlayerForm && (
            <Row>
              <Col offset={8} span={8}>
                <PlayerForm handleSubmit={handleAddPlayerForm}></PlayerForm>
              </Col>
            </Row>
          )}

          <br />

          <Row>
            <Col offset={8} span={8}>
              <PlayerCards
                players={players}
                setPlayers={setPlayers}
              ></PlayerCards>
            </Col>
          </Row>
        </>
      ) : null}
    </div>
  )
}

export default Team
