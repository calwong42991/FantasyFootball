import React from 'react';
import SelectDstTable from './Tables/SelectDstTable.1';

const PlayerSelect = ({playerSelected, imageFormater}) => {
  return (<div>
    <SelectDstTable dst={playerSelected} imageFormater={imageFormater} />
  </div>)
}

export default PlayerSelect;