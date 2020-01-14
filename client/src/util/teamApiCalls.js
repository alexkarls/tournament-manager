import axios from 'axios'

export const getTeam = async id => {
  try {
    return await axios.get(`http://localhost:4000/api/team/${id}`)
  } catch (error) {
    console.log(error)
  }
}

export const getTeams = async () => {
  try {
    return await axios.get('http://localhost:4000/api/team/')
  } catch (error) {
    console.log(error)
  }
}

export const addTeam = async ({ team: { id, name, country } }) => {
  try {
    await axios.post('http://localhost:4000/api/team', { id, name, country })
  } catch (error) {
    console.log(error)
  }
}

export const updateTeam = async ({ team: { id, name, country } }) => {
  console.log(id)
  console.log(name)
  try {
    await axios.put(`http://localhost:4000/api/team/${id}`, { name, country })
  } catch (error) {
    console.log(error)
  }
}

export const deleteTeam = async ({ team: { id } }) => {
  try {
    console.log(id)
    await axios.delete(`http://localhost:4000/api/team/${id}`)
  } catch (error) {
    console.log(error)
  }
}
