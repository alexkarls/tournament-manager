import axios from 'axios'
import Match from '../model/MatchModel'

export const getMatch = async matchId => {
  try {
    const res = await axios.get(`http://localhost:4000/api/match/${matchId}`)
    const m = res.data[0]
    return new Match(
      m.id,
      m.team_1,
      m.team_2,
      m.start_date_time,
      m.end_date_time
    )
  } catch (error) {
    console.log(error)
  }
}

export const getMatches = async () => {
  try {
    const res = await axios.get(`http://localhost:4000/api/match`)
    const matches = []
    res.data.forEach(m => {
      matches.push(
        new Match(m.id, m.team_1, m.team_2, m.start_date_time, m.end_date_time)
      )
    })
    return matches
  } catch (error) {
    console.log(error)
  }
}

export const addMatch = async ({
  match: { id, team1, team2, startDateTime, endDateTime }
}) => {
  try {
    axios.post('http://localhost:4000/api/match', {
      id,
      team1,
      team2,
      startDateTime,
      endDateTime
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateMatch = async ({
  match: { id, team1, team2, startDateTime, endDateTime }
}) => {
  try {
    axios.put(`http://localhost:4000/api/match/${id}`, {
      team1,
      team2,
      startDateTime,
      endDateTime
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteMatch = async ({ match: { id } }) => {
  try {
    axios.delete(`http://localhost:4000/api/match/${id}`)
  } catch (error) {
    console.log(error)
  }
}
