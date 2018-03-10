import React, {Component} from 'react';

const TeamLog = ({QB, RB_One, RB_Two, WR_One, WR_Two, TE, Kicker, Dst, BN1, BN2, BN3, BN4, BN5 }) => {
  return(<div className="teamLog">
      QB: <img src={QB.player_photo} width style={{width: 50}}/> {' '} {QB.player_name} <br />
      RB1: <img src={RB_One.player_photo} width style={{width: 50}}/> {' '} {RB_One.player_name} <br />
      RB2: <img src={RB_Two.player_photo} width style={{width: 50}}/> {' '} {RB_Two.player_name} <br />
      WR1: <img src={WR_One.player_photo} width style={{width: 50}}/> {' '} {WR_One.player_name}  <br />
      WR2: <img src={WR_Two.player_photo} width style={{width: 50}}/> {' '} {WR_Two.player_name} <br />
      TE: <img src={TE.player_photo} width style={{width: 50}}/> {' '} {TE.player_name} <br />
      Kicker: <img src={Kicker.player_photo} width style={{width: 50}}/> {' '} {Kicker.player_name} <br /> 
      Dst: <img src={Dst.team_photo} width style={{width: 50}}/> {' '} {Dst.team} <br />
      BN: <img src={BN1.player_photo} width style={{width: 50}}/> {' '} {BN1.player_name} <br />
      BN: <img src={BN2.player_photo} width style={{width: 50}}/> {' '} {BN2.player_name} <br />
      BN: <img src={BN3.player_photo} width style={{width: 50}}/> {' '} {BN3.player_name} <br />
      BN: <img src={BN4.player_photo} width style={{width: 50}}/> {' '} {BN4.player_name} <br />
      BN: <img src={BN5.player_photo} width style={{width: 50}}/> {' '} {BN5.player_name} <br />
  </div>)
}





export default TeamLog;