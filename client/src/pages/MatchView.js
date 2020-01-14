import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { Row, Col, Button, Typography } from 'antd'

import { getTeam } from '../util/teamApiCalls'
import { getPlayers } from '../util/playerApiCalls'
import { getMatch, deleteMatch } from '../util/matchApiCalls'
import { getMatchScores, addScore } from '../util/scoreApiCalls'
import MatchProfile from '../components/Match/MatchProfile'
import ScoreForm from '../components/MatchEvents/ScoreForm'
import ScoreCards from '../components/MatchEvents/ScoreCards'

const { Title } = Typography

const MatchView = () => {
  const [team1, setTeam1] = useState({})
  const [team2, setTeam2] = useState({})
  const [match, setMatch] = useState({})
  const [players1, setPlayers1] = useState([])
  const [players2, setPlayers2] = useState([])
  const [scores, setScores] = useState([])

  const [showScoreForm, setShowScoreForm] = useState(false)

  const { id } = useParams()

  const history = useHistory()

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const res = await getMatch(id)
        setMatch(res)
        fetchTeam(res.team1, true)
        fetchTeam(res.team2, false)
        fetchPlayers(res.team1, true)
        fetchPlayers(res.team2, false)
      } catch (error) {
        console.log(error)
      }
    }
    const fetchScore = async () => {
      try {
        const res = await getMatchScores(id)
        setScores(res)
      } catch (error) {
        console.log(error)
      }
    }
    // Called in "const fetchMatch"
    const fetchTeam = async (id, isTeam1) => {
      try {
        if (isTeam1) {
          const res = await getTeam(id)
          setTeam1(res.data[0])
        } else {
          const res = await getTeam(id)
          setTeam2(res.data[0])
        }
      } catch (error) {
        console.log(error)
      }
    }
    // Called in "const fetchMatch"
    const fetchPlayers = async (id, isInTeam1) => {
      try {
        if (isInTeam1) {
          const res = await getPlayers(id)
          setPlayers1(res.data)
        } else {
          const res = await getPlayers(id)
          setPlayers2(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchMatch()
    fetchScore()
  }, [id])

  const handleMatchDelete = () => {
    deleteMatch({ match })
    // Wait for delete then redirect...
    window.setTimeout(() => {
      history.push('/match')
    }, 100)
  }

  const handleAddScoreSubmit = score => {
    addScore({ score })
    const updated = []
    scores.forEach(s => {
      updated.push(s)
    })
    updated.unshift(score)
    setScores(updated)
    setShowScoreForm(!showScoreForm)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <br />
      <Title level={1}>Match View</Title>
      <Row>
        <Col offset={6} span={12}>
          <MatchProfile match={match} team1={team1} team2={team2}></MatchProfile>
        </Col>
      </Row>

      <br />

      <Row>
        <Button onClick={handleMatchDelete}>Delete</Button>
      </Row>

      <br />
      <Row>
        <Button
          onClick={() => {
            setShowScoreForm(!showScoreForm)
          }}
        >
          New Score
        </Button>
      </Row>

      <br />

      {showScoreForm && (
        <Row>
          <Col offset={8} span={8}>
            <ScoreForm
              handleSubmit={handleAddScoreSubmit}
              match={match}
              players1={players1}
              players2={players2}
              team1={team1}
              team2={team2}
            ></ScoreForm>
          </Col>
        </Row>
      )}

      <br />

      <Row>
        <Col offset={8} span={8}>
          <ScoreCards scores={scores} setScores={setScores}></ScoreCards>
        </Col>
      </Row>
    </div>
  )
}

export default MatchView
