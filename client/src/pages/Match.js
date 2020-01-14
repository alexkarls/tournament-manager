import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Typography } from 'antd'
import MatchForm from '../components/Match/MatchForm'
import MatchCards from '../components/Match/MatchCards'
import { getTeams } from '../util/teamApiCalls'
import { addMatch, getMatches } from '../util/matchApiCalls'

const { Title } = Typography

const Match = () => {
  const [teams, setTeams] = useState([])
  const [matches, setMatches] = useState([])
  const [showMatchForm, setShowMatchForm] = useState(false)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await getTeams()
        setTeams(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    const fetchMatches = async () => {
      try {
        const res = await getMatches()
        setMatches(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTeams()
    fetchMatches()
  }, [])

  const handleAddMatchSubmit = match => {
    addMatch({ match })
    const updated = []
    matches.forEach(m => {
      updated.push(m)
    })
    updated.unshift(match)
    setMatches(updated)
    setShowMatchForm(!showMatchForm)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <br />

      <Title level={1}>Match</Title>

      <br />

      <Row>
        <Col offset={8} span={8}>
          <Button onClick={() => setShowMatchForm(!showMatchForm)}>
            New Match
          </Button>
        </Col>
      </Row>

      <br />

      {showMatchForm && (
        <Row>
          <Col offset={8} span={8}>
            <MatchForm handleSubmit={handleAddMatchSubmit} teams={teams} />
          </Col>
        </Row>
      )}

      <br />

      {matches.length > 0 ? (
        <Row>
          <Col offset={8} span={8}>
            <MatchCards matches={matches} teams={teams}></MatchCards>
          </Col>
        </Row>
      ) : null}
    </div>
  )
}

export default Match
