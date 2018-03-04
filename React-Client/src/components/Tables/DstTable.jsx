import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const DstTable = ({dst, option, imageFormater}) => {
  return (<div>
    {console.log(dst)}
    <BootstrapTable data={dst.sort((a,b) => {return a.rank - b.rank})} pagination={true} striped hover containerStyle={{width:'150%', overflowX: 'scroll'}} bordered={true} >

      <TableHeaderColumn dataField="rank" isKey={true} width="3%" dataAlign="center" dataSort={true}  >Rank </TableHeaderColumn>
      <TableHeaderColumn dataField="team_photo" dataFormat={imageFormater} width="5%" dataAlign="center" dataSort={true}> Photo </TableHeaderColumn>
      <TableHeaderColumn dataField="team" width="5%" dataAlign="center" dataSort={true}> Team </TableHeaderColumn>
      <TableHeaderColumn dataField="team_pos" width="5%" dataAlign="center" dataSort={true}> POS </TableHeaderColumn>

      <TableHeaderColumn dataField="points_allowed" width="5%" dataAlign="center" dataSort={true}> Points Allowed </TableHeaderColumn>
      <TableHeaderColumn dataField="sack" width="5%" dataAlign="center" dataSort={true}> Sack </TableHeaderColumn>
      <TableHeaderColumn dataField="interception" width="5%" dataAlign="center" dataSort={true}> Interception </TableHeaderColumn>
      <TableHeaderColumn dataField="fumble" width="5%" dataAlign="center" dataSort={true}> Fumble </TableHeaderColumn>
      <TableHeaderColumn dataField="safety" width="5%" dataAlign="center" dataSort={true}> Safety </TableHeaderColumn>
      <TableHeaderColumn dataField="td" width="5%" dataAlign="center" dataSort={true}> TDs </TableHeaderColumn>
      <TableHeaderColumn dataField="return_td" width="5%" dataAlign="center" dataSort={true}> Return TD </TableHeaderColumn>
      <TableHeaderColumn dataField="def_two_point_ret" width="5%" dataAlign="center" dataSort={true}> Def 2 PT </TableHeaderColumn>

      <TableHeaderColumn dataField="fantasy_pts" width="5%" dataAlign="center" dataSort={true}> Fantasy PTs </TableHeaderColumn>

    </BootstrapTable>  
  </div>)
}

export default DstTable;