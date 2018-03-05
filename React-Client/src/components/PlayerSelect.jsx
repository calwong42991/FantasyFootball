import React from 'react';
import SelectDstTable from './Tables/SelectDstTable.1';
import SelectKickerTable from './Tables/SelectKickerTable.1';
import SelectPlayerTable from './Tables/SelectPlayerTable.1';

const PlayerSelect = ({playerSelected, imageFormater, draftPlayer}) => {
  return (<div>
    {playerSelected.team_pos
    ? <SelectDstTable dst={playerSelected} imageFormater={imageFormater} draftPlayer={draftPlayer} /> :
      playerSelected.pat_made ? 
      <SelectKickerTable kicker={playerSelected} imageFormater={imageFormater} draftPlayer={draftPlayer} /> :
      <SelectPlayerTable player={playerSelected} imageFormater={imageFormater} draftPlayer={draftPlayer} />
    }

  </div>)
}

export default PlayerSelect;