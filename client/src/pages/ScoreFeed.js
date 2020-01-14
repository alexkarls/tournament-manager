import React from 'react'
import { Row, Col, Typography } from 'antd'
import RecentScoreEvent from '../components/MatchEvents/RecentScoreEvent'

const { Title } = Typography

const ScoreFeed = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <br />

      <Title level={1}>Score Feed</Title>

      <br />

      <Row>
        <Col offset={8} span={8}>
          <RecentScoreEvent></RecentScoreEvent>
        </Col>
      </Row>
    </div>
  )
}

export default ScoreFeed
