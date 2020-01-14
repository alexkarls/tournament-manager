import React from 'react'
import { deleteScore } from '../../util/scoreApiCalls'

import ScoreCard from './ScoreCard'

const ScoreCards = ({ scores, setScores }) => {
  const handleDelete = score => {
    deleteScore({ score })
    const updated = scores.filter(s => s.id !== score.id)
    setScores(updated)
  }

  return (
    <>
      {scores.length > 0
        ? scores.map(score => (
            <>
              <ScoreCard
                key={score.id}
                score={score}
                handleDelete={handleDelete}
              ></ScoreCard>
            </>
          ))
        : null}
    </>
  )
}

export default ScoreCards
