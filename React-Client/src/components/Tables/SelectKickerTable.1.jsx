import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const SelectKickerTable = ({kicker, imageFormater}) => {
  return (<div>
    <BootstrapTable data={[kicker]} striped hover containerStyle={{width:'150%', overflowX: 'scroll'}} bordered={true} >

      <TableHeaderColumn dataField="rank" isKey={true} width="3%" dataAlign="center" dataSort={true}  >Rank </TableHeaderColumn>
      <TableHeaderColumn dataField="player_photo" dataFormat={imageFormater} width="5%" dataAlign="center" dataSort={true}> Photo </TableHeaderColumn>
      <TableHeaderColumn dataField="player_name" width="5%" dataAlign="center" dataSort={true}> Name </TableHeaderColumn>
      <TableHeaderColumn dataField="player_team" width="5%" dataAlign="center" dataSort={true}> Team </TableHeaderColumn>
      <TableHeaderColumn dataField="player_pos" width="5%" dataAlign="center" dataSort={true}> POS </TableHeaderColumn>

      <TableHeaderColumn dataField="pat_made" width="5%" dataAlign="center" dataSort={true}> PAT </TableHeaderColumn>
      <TableHeaderColumn dataField="nineteen" width="5%" dataAlign="center" dataSort={true}> 0-19 </TableHeaderColumn>
      <TableHeaderColumn dataField="two_nine" width="5%" dataAlign="center" dataSort={true}> 20-29 </TableHeaderColumn>
      <TableHeaderColumn dataField="three_nine" width="5%" dataAlign="center" dataSort={true}> 30-39 </TableHeaderColumn>
      <TableHeaderColumn dataField="four_nine" width="5%" dataAlign="center" dataSort={true}> 40-49 </TableHeaderColumn>
      <TableHeaderColumn dataField="five_plus" width="5%" dataAlign="center" dataSort={true}> 50+ </TableHeaderColumn>

      <TableHeaderColumn dataField="fantasy_pts" width="5%" dataAlign="center" dataSort={true}> Fantasy PTs </TableHeaderColumn>

    </BootstrapTable>  
  </div>)
}

export default SelectKickerTable;


