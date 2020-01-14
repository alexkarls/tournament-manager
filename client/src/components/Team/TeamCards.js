import React from 'react'
import TeamCard from './TeamCard'

const Teams = ({ teams }) => {

  return (
    <>
      {teams.length > 0
        ? teams.map(team => (
            <>
            
              <TeamCard key={team.id} team={team}></TeamCard>
            </>
          ))
        : null}
    </>
  )
}

export default Teams
