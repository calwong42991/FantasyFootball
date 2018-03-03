import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import PlayersList from './PlayersList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import NavBar from './nav_bar/Navigation';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: []
    }
    this.getPlayer = this.getPlayer.bind(this);
    this.imageFormater = this.imageFormater.bind(this);
  }

  getPlayer(){
    axios({
      method: 'GET',
      url: '/api/getAllPlayers'
    })
    .then((results) => {
      console.log(results);

      this.setState({
        players: results.data
      })
    })
  }

  imageFormater(cell, row){
    return (<img style={{width:50}} src={cell}/>)
  } 

  componentDidMount(){
    this.getPlayer();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={darkBaseTheme}>
        <div> 
          <NavBar />
          <h1>Fantasy Football</h1>
          {/* <PlayersList players={this.state.players}/> */}
          <BootstrapTable data={this.state.players.sort((a,b) => {return a.rank - b.rank})} options={this.props.option} pagination={true} striped hover containerStyle={{width:'150%', overflowX: 'scroll'}} >

            <TableHeaderColumn dataField="rank" isKey={true} width="3%" dataAlign="center" dataSort={true}  >Rank </TableHeaderColumn>
            <TableHeaderColumn dataField="player_photo" dataFormat={this.imageFormater} width="5%" dataAlign="center" dataSort={true}> Photo </TableHeaderColumn>
            <TableHeaderColumn dataField="player_name" width="5%" dataAlign="center" dataSort={true}> Name </TableHeaderColumn>
            <TableHeaderColumn dataField="player_team" width="5%" dataAlign="center" dataSort={true}> Team </TableHeaderColumn>
            <TableHeaderColumn dataField="player_pos" width="5%" dataAlign="center" dataSort={true}> POS </TableHeaderColumn>

            <TableHeaderColumn dataField="passing_yrds" width="5%" dataAlign="center" dataSort={true}> Passing Yards </TableHeaderColumn>
            <TableHeaderColumn dataField="passing_tds" width="5%" dataAlign="center" dataSort={true}> Passing TDs </TableHeaderColumn>
            <TableHeaderColumn dataField="passing_int" width="5%" dataAlign="center" dataSort={true}> Passing INTs </TableHeaderColumn>

            <TableHeaderColumn dataField="recieving_yrds" width="5%" dataAlign="center" dataSort={true}> Recieving Yards </TableHeaderColumn>
            <TableHeaderColumn dataField="recieving_tds" width="5%" dataAlign="center" dataSort={true}> Recieving TDs </TableHeaderColumn>

            <TableHeaderColumn dataField="rushing_yrds" width="5%" dataAlign="center" dataSort={true}> Rushing Yards </TableHeaderColumn>
            <TableHeaderColumn dataField="rushing_tds" width="5%" dataAlign="center" dataSort={true}> Rushing TDs </TableHeaderColumn>

            <TableHeaderColumn dataField="lost_fumble" width="5%" dataAlign="center" dataSort={true}> Lost Fumble </TableHeaderColumn>
            <TableHeaderColumn dataField="two_pts" width="5%" dataAlign="center" dataSort={true}> 2 PT Conversion </TableHeaderColumn>

            <TableHeaderColumn dataField="fantasy_pts" width="5%" dataAlign="center" dataSort={true}> Fantasy Points </TableHeaderColumn>

          </BootstrapTable>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;


  
