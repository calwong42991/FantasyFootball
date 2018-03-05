import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const SelectPlayerTable = ({player, imageFormater}) => {
  return (<div>
    <BootstrapTable data={[player]} striped hover containerStyle={{width:'150%', overflowX: 'scroll'}} bordered={true} >

      <TableHeaderColumn dataField="rank" isKey={true} width="3%" dataAlign="center" dataSort={true}  >Rank </TableHeaderColumn>
      <TableHeaderColumn dataField="player_photo" dataFormat={imageFormater} width="5%" dataAlign="center" dataSort={true}> Photo </TableHeaderColumn>
      <TableHeaderColumn dataField="player_name" width="5%" dataAlign="center" dataSort={true}> Name </TableHeaderColumn>
      <TableHeaderColumn dataField="player_team" width="5%" dataAlign="center" dataSort={true}> Team </TableHeaderColumn>
      <TableHeaderColumn dataField="player_pos" width="5%" dataAlign="center" dataSort={true}> POS </TableHeaderColumn>

      <TableHeaderColumn dataField="passing_yrds" width="5%" dataAlign="center" dataSort={true}> Passing Yrds </TableHeaderColumn>
      <TableHeaderColumn dataField="passing_tds" width="5%" dataAlign="center" dataSort={true}> Passing TDs </TableHeaderColumn>
      <TableHeaderColumn dataField="passing_int" width="5%" dataAlign="center" dataSort={true}> Passing INTs </TableHeaderColumn>

      <TableHeaderColumn dataField="recieving_yrds" width="5%" dataAlign="center" dataSort={true}> Rec Yrds </TableHeaderColumn>
      <TableHeaderColumn dataField="recieving_tds" width="5%" dataAlign="center" dataSort={true}> Rec TDs </TableHeaderColumn>

      <TableHeaderColumn dataField="rushing_yrds" width="5%" dataAlign="center" dataSort={true}> Rush Yrds </TableHeaderColumn>
      <TableHeaderColumn dataField="rushing_tds" width="5%" dataAlign="center" dataSort={true}> Rush TDs </TableHeaderColumn>

      <TableHeaderColumn dataField="lost_fumble" width="5%" dataAlign="center" dataSort={true}> Lost Fumble </TableHeaderColumn>
      <TableHeaderColumn dataField="two_pts" width="5%" dataAlign="center" dataSort={true}> 2 PTs </TableHeaderColumn>

      <TableHeaderColumn dataField="fantasy_pts" width="5%" dataAlign="center" dataSort={true}> Fantasy PTs </TableHeaderColumn>

    </BootstrapTable>  
  </div>)
}

export default SelectPlayerTable;