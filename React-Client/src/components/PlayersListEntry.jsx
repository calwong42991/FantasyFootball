import React from 'react';

const PlayersListEntry = ({player}) => {
  return (<div>
    <img src={player.player_photo} />
    {" "} Name: {player.player_name}
  </div>)
}

export default PlayersListEntry;

{/*rank: 74,
    fantasy_pts: 132,
    fumble_tds: 0,
    lost_fumble: 0,
    passing_int: 0,
    passing_tds: 0,
    passing_yrds: 0,
    player_name: 'Devin Funchess ',
    player_photo: 'http://res.cloudinary.com/foodswap/image/upload/v1519339859/ffstats/devinfunchess.png',
    player_pos: 'WR',
    player_team: 'CAR',
    recieving_tds: 8,
    recieving_yrds: 840,
    rushing_tds: 0,
    rushing_yrds: 0,
two_pts: 0 }, */}