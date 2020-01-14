import React from 'react'
import MatchCard from './MatchCard'

const MatchCards = ({ matches, teams }) => {
  const findMatchTeam = id => {
    return teams.find(team => team.id === id)
  }

  return (
    <>
      {matches.length > 0
        ? matches.map(match => (
            <>
              <MatchCard
                key={match.id}
                match={match}
                team1={findMatchTeam(match.team1)}
                team2={findMatchTeam(match.team2)}
              ></MatchCard>
            </>
          ))
        : null}
    </>
  )
}

export default MatchCards
