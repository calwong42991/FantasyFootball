import React from 'react';
import PlayersListEntry from './PlayersListEntry';

const PlayersList = ({players}) => {
  return(<div>
    <h2>Players</h2>
    {players.sort((a,b) => {
      return a.rank - b.rank
    }).map((player, index) => {
        return <PlayersListEntry player={player} key={index} />
      })
    }
  </div>)
}

export default PlayersList;