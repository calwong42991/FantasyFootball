import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import PlayersList from './PlayersList';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import NavBar from './nav_bar/Navigation';
import PlayerTable from './Tables/PlayerTable';
import KickerTable from './Tables/KickerTable';
import DstTable from './Tables/DstTable';
import PlayerSelect from './PlayerSelect';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      kicker: [],
      dst: [],
      playerSelected: []
    }
    this.getAllPlayers = this.getAllPlayers.bind(this);
    this.getAllKickers = this.getAllKickers.bind(this);
    this.getAllDst = this.getAllDst.bind(this);
    this.playerSelection = this.playerSelection.bind(this);
    this.imageFormater = this.imageFormater.bind(this);
  }

  getAllPlayers(){
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

  getAllKickers(){
    axios({
      method: 'GET',
      url: '/api/getAllKickers'
    })
    .then((results) => {
      console.log(results);

      this.setState({
        kicker: results.data
      })
    })
  }

  getAllDst(){
    axios({
      method: 'GET',
      url: '/api/getAllDst'
    })
    .then((results) => {
      console.log(results.data);

      this.setState({
        dst: results.data
      })
    })
  }

  imageFormater(cell, row){
    return (<img style={{width:50}} src={cell}/>)
  }
  
  playerSelection(row){
    this.setState({
      playerSelected: row
    })
  }

  componentDidMount(){
    this.getAllDst()
  }

  render() {
    return (<div> 
      <NavBar />
      <h1>Fantasy Football</h1>
      {false && <PlayersList players={this.state.players}/> }
      
      {this.state.playerSelected.length !== 0 && <PlayerSelect playerSelected={this.state.playerSelected} imageFormater={this.imageFormater} />}

      {false && <PlayerTable players={this.state.players} option={this.props.options} imageFormater={this.imageFormater} />}
      
      {false && <KickerTable kicker={this.state.kicker} option={this.props.options} imageFormater={this.imageFormater}/>}

      {true && <DstTable dst={this.state.dst} Select={this.playerSelection} imageFormater={this.imageFormater} />}

    </div>)
  }
}

export default App;


  
