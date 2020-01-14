import React from 'react'
import PlayerCard from './PlayerCard'

const Players = ({ players, setPlayers }) => {
  return (
    <>
      {players.length > 0
        ? players.map(player => (
            <>
              <PlayerCard
                key={player.number}
                player={player}
                players={players}
                setPlayers={setPlayers}
              ></PlayerCard>
            </>
          ))
        : null}
    </>
  )
}

export default Players
