import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'antd'
import { getMatchResult } from '../../util/resultApiCalls'

const MatchProfile = ({ match, team1, team2 }) => {
  const [result, setResult] = useState([])

  // Not fixed: Results do not update on score delete

  useEffect(() => {
    const fetchResult = async () => {
      const res = await getMatchResult(match.id, team1.id, team2.id)
      setResult(res.data)
    }
    fetchResult()
  }, [match, team1, team2])

  const findResult = teamId => {
    const res = result.find(r => r.team_id === teamId)
    return res
  }

  return (
    <div style={{ textAlign: 'center' }}>
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
      </Card>
    </div>
  )
}

export default MatchProfile
