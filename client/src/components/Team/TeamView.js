import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import TeamForm from './TeamForm'
import { updateTeam, deleteTeam } from '../../util/teamApiCalls'

const TeamView = ({ team, setTeam }) => {
  const [showTeamForm, setShowTeamForm] = useState(false)

  const history = useHistory()

  const handleDelete = () => {
    deleteTeam({ team })
    // Wait for delete then redirect...
    window.setTimeout(() => {
      history.push('/')
    }, 100)
  }

  const handleUpdateTeamForm = team => {
    try {
      updateTeam({ team })
      setTeam(team) // Update team state...
      setShowTeamForm(false) // Remove form...
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {team ? (
        <>
          <Button onClick={() => setShowTeamForm(!showTeamForm)}>Update</Button>
          <Button onClick={() => handleDelete()}>Delete</Button>
          {showTeamForm && (
            <TeamForm
              handleSubmit={handleUpdateTeamForm}
              team={team}
            ></TeamForm>
          )}
        </>
      ) : null}
    </>
  )
}

export default TeamView
