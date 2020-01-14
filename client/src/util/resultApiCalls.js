import axios from 'axios'

export const getMatchResult = async (matchId, team1, team2) => {
  try {
    return await axios.get(`http://localhost:4000/api/result/${matchId}/${team1}/${team2}`)
  } catch (error) {
    console.log(error)
  }
}