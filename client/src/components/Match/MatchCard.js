import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'antd'
import { getMatchResult } from '../../util/resultApiCalls'

const MatchCard = ({ match, team1, team2 }) => {
  const [result, setResult] = useState([])

  useEffect(() => {
    const fetchResult = async () => {
      const res = await getMatchResult(match.id, team1.id, team2.id)
      setResult(res.data)
    }
    fetchResult()
  }, [team1, team2])

  const findResult = teamId => {
    const res = result.find(r => (r.team_id === teamId))
    return res
  }

  return (
    <>
    
      <Card title='Match'>
        {team1 && (
          <Row>
            <Col>{team1.name}</Col>
            <br />
            {findResult(team1.id) ? (
              <>
                <Col>score: {findResult(team1.id).score_count}</Col>
              </>
            ) : null}
          </Row>
        )}

        <br />

        <Row>
          <Col>VS</Col>
        </Row>

        <br />

        {team2 && (
          <Row>
            <Col>{team2.name}</Col>
            <br />
            {findResult(team2.id) ? (
              <>
                <Col>score: {findResult(team2.id).score_count}</Col>
              </>
            ) : null}
          </Row>
        )}

        <br />

        <Button>
          <Link
            to={{
              pathname: `/match/${match.id}`
            }}
          >
            Go to Match
          </Link>
        </Button>
      </Card>
    </>
  )
}

export default MatchCard
