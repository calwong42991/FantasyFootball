import React from 'react';

const PosSelector = ({PosSelection}) => {
  return (<div>
    <form >
      <button name='subject' type='button' value='All_players' onClick={PosSelection} > All Players </button>
      <button name='subject' type='button' value='QB' onClick={PosSelection} > QB </button>
      <button name='subject' type='button' value='RB' onClick={PosSelection} > RB </button>
      <button name='subject' type='button' value='WR' onClick={PosSelection} > WR </button>
      <button name='subject' type='button' value='TE' onClick={PosSelection} > TE </button>
      <button name='subject' type='button' value='Kicker' onClick={PosSelection} > Kicker </button>
      <button name='subject' type='button' value='Dst' onClick={PosSelection} > Dst </button>
    </form>
  </div>)
}

export default PosSelector;