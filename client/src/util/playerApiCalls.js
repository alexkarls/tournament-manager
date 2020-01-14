import axios from 'axios'

export const getPlayers = async teamId => {
  try {
    return await axios.get(`http://localhost:4000/api/player/team/${teamId}`)
  } catch (error) {
    console.log(error)
  }
}

export const getPlayer = async id => {
  try {
    return await axios.get(`http://localhost:4000/api/player/${id}`)
  } catch (error) {
    console.log(error)
  }
}

export const addPlayer = async ({ player: { id, name, number, teamId } }) => {
  try {
    axios.post('http://localhost:4000/api/player', { id, name, number, teamId })
  } catch (error) {
    console.log(error)
  }
}

export const updatePlayer = async ({ player: { id, name, number } }) => {
  try {
    axios.put(`http://localhost:4000/api/player/${id}`, { name, number })
  } catch (error) {
    console.log(error)
  }
}

export const deletePlayer = async ({ player: { id } }) => {
  try {
    axios.delete(`http://localhost:4000/api/player/${id}`)
  } catch (error) {
    console.log(error)
  }
}
