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
import PosSelector from './PosSelector';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      kicker: [],
      dst: [],
      displayAll: true,
      displayKicker: false,
      displayDst: false,
      displayPlayer: false,
      playerSelected: [],
      PosSelected: ''
    }
    this.getAllPlayers = this.getAllPlayers.bind(this);
    this.getAllKickers = this.getAllKickers.bind(this);
    this.getAllDst = this.getAllDst.bind(this);
    this.playerSelection = this.playerSelection.bind(this);
    this.imageFormater = this.imageFormater.bind(this);
    this.PosSelection = this.PosSelection.bind(this);
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

  PosSelection(e){
    const PosSelect = e.target.value;
    if(PosSelect === 'All_players'){
      this.setState({
        displayAll: true,
        PosSelected: '',
        displayDst: true,
        displayKicker: true,
        displayPlayer: true
      })
    }
    if(['QB', 'RB', 'WR', 'TE'].includes(PosSelect)) {
      this.setState({
        PosSelected: PosSelect,
        displayPlayer: true,
        displayAll: false,
        displayDst: false,
        displayKicker: false
      })
    }

    if(PosSelect === 'Kicker') {
      this.setState({
        displayAll: false,
        displayDst: false,
        displayKicker: true,
        displayPlayer: false
      })
    }
    if(PosSelect === 'Dst') {
      this.setState({
        displayAll: false,
        displayDst: true,
        displayKicker: false,
        displayPlayer: false
      })
    }
  }

  componentDidMount(){
    this.getAllDst(),
    this.getAllKickers(),
    this.getAllPlayers()
  }

  render() {
    return (<div> 
      <NavBar />
      <h1>Fantasy Football</h1>
      {false && <PlayersList players={this.state.players}/> }
      
      {this.state.playerSelected.length !== 0 && <PlayerSelect playerSelected={this.state.playerSelected} imageFormater={this.imageFormater} />}
      
      {true && <PosSelector PosSelection={this.PosSelection}/>}

      {(this.state.displayAll || this.state.displayPlayer) && <PlayerTable players={this.state.players} PosSelected={this.state.PosSelected} Select={this.playerSelection} option={this.props.options} imageFormater={this.imageFormater} />}
      
      {(this.state.displayAll || this.state.displayKicker) && <KickerTable kicker={this.state.kicker} Select={this.playerSelection} option={this.props.options} imageFormater={this.imageFormater}/>}

      {(this.state.displayAll || this.state.displayDst) && <DstTable dst={this.state.dst} Select={this.playerSelection} imageFormater={this.imageFormater} />}

    </div>)
  }
}

export default App;


  
