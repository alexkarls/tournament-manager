import axios from 'axios'
import Score from '../model/ScoreModel'

export const getMatchScores = async matchId => {
  try {
    const res = await axios.get(`http://localhost:4000/api/score/${matchId}`)
    const scores = []
    res.data.forEach(s => {
      scores.push(
        new Score(
          s.id,
          s.match_id,
          s.team_id,
          s.player_id,
          s.value,
          s.date_time
        )
      )
    })

    return scores
  } catch (error) {
    console.log(error)
  }
}

export const addScore = async ({
  score: { id, matchId, teamId, playerId, value, dateTime }
}) => {
  try {
    await axios.post('http://localhost:4000/api/score', {
      id,
      matchId,
      teamId,
      playerId,
      value,
      dateTime
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteScore = async ({ score: { id } }) => {
  try {
    await axios.delete(`http://localhost:4000/api/score/${id}`)
  } catch (error) {
    console.log(error)
  }
}

export const getRecentScores = async () => {
  try {
    return await axios.get('http://localhost:4000/api/score/recent')
  } catch (error) {
    console.log(error)
  }
}
