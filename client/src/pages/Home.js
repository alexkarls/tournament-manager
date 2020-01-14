import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Typography } from 'antd'
import TeamCards from '../components/Team/TeamCards'
import TeamForm from '../components/Team/TeamForm'
import { addTeam, getTeams } from '../util/teamApiCalls'

const { Title } = Typography

const Home = () => {
  const [teams, setTeams] = useState({})
  const [showTeamForm, setShowTeamForm] = useState(false)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await getTeams()
        setTeams(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTeams()
  }, [])

  const handleAddTeamSubmit = team => {
    try {
      addTeam({ team })
      const updated = []
      teams.forEach(t => {
        updated.push(t)
      })
      updated.unshift(team)
      setTeams(updated)
      setShowTeamForm(!showTeamForm)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>

      <br />

      <Row>
        <Col offset={8} span={8}>
          <Title level={1}>Home</Title>
        </Col>
      </Row>

      <br />

      <Row>
        <Col offset={8} span={8}>
          <Button onClick={() => setShowTeamForm(!showTeamForm)}>
            New Team
          </Button>
        </Col>
      </Row>

      <br />

      {showTeamForm && (
        <Row>
          <Col offset={8} span={8}>
            <TeamForm handleSubmit={handleAddTeamSubmit}></TeamForm>
          </Col>
        </Row>
      )}

      <br />
      <Row>
        <Col offset={8} span={8}>
          <TeamCards teams={teams}></TeamCards>
        </Col>
      </Row>
    </div>
  )
}

export default Home
