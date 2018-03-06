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
import TeamLog from './TeamLog';

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
      PosSelected: '',
      QB: [],
      RB_One: [],
      RB_Two: [],
      WR_One: [],
      WR_Two: [],
      TE: [],
      kicks: [],
      defense: [],
      BN1: [],
      BN2: [],
      BN3: [],
      BN4: [],
      BN5: []
    }
    this.getAllPlayers = this.getAllPlayers.bind(this);
    this.getAllKickers = this.getAllKickers.bind(this);
    this.getAllDst = this.getAllDst.bind(this);
    this.playerSelection = this.playerSelection.bind(this);
    this.imageFormater = this.imageFormater.bind(this);
    this.PosSelection = this.PosSelection.bind(this);
    this.draftPlayer = this.draftPlayer.bind(this);
    this.setTeam = this.setTeam.bind(this);
  }

  getAllPlayers(){
    axios({
      method: 'GET',
      url: '/api/getAllPlayers'
    })
    .then((results) => {
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

  setTeam(player) {
    if(player[0].player_pos === 'K' && this.state.kicks.length === 0) {
      this.setState({
        kicks: player[0]
      })
      return
    }

    if(player[0].player_pos === 'QB' && this.state.QB.length === 0) {
      this.setState({
        QB: player[0]
      })
      return
    }

    if(player[0].player_pos === 'RB' && Array.isArray(this.state.RB_One)) {
      this.setState({
        RB_One: player[0]
      })
      return
    }

    if(player[0].player_pos === 'RB' && !Array.isArray(this.state.RB_One) && Array.isArray(this.state.RB_Two)) {
      this.setState({
        RB_Two: player[0]
      })
      return
    }

    if(player[0].player_pos === 'WR' && Array.isArray(this.state.WR_One)) {
      this.setState({
        WR_One: player[0]
      })
      return
    }

    if(player[0].player_pos === 'WR' && !Array.isArray(this.state.WR_One) && Array.isArray(this.state.WR_Two)) {
      this.setState({
        WR_Two: player[0]
      })
      return
    }

    if(player[0].player_pos === 'TE' && this.state.TE.length === 0) {
      this.setState({
        TE: player[0]
      })
      return
    }

    if(player[0].team_pos === 'DEF' && this.state.defense.length === 0) {
      this.setState({
        defense: player[0]
      })
      return
    }

    if(this.state.QB !== [] && this.state.RB_Two !== [] && this.state.WR_Two !== [] && this.state.TE !== [] && this.state.kicks !== [] && this.state.defense !== []){
      if(this.state.BN1.length === 0) {
        this.setState({
          BN1: player[0]
        })
        return
      } else if(this.state.BN2.length === 0) {
        this.setState({
          BN2: player[0]
        })
        return
      } else if(this.state.BN3.length === 0) {
        this.setState({
          BN3: player[0]
        })
        return
      } else if(this.state.BN4.length === 0) {
        this.setState({
          BN4: player[0]
        })
        return
      } else if(this.state.BN5.length === 0) {
        this.setState({
          BN5: player[0]
        })
        return
      }
    }
    console.log('draft is over')
  }

  draftPlayer() {
    if(this.state.playerSelected.player_pos === 'K'){
      this.state.kicker.map((a, index) => {
        if(a.rank === this.state.playerSelected.rank){
          const player = this.state.kicker.splice(index, 1);
          this.setTeam(player);
          this.state.kicker.splice(index, 1);
          this.setState({
            playerSelected: []
          })
          return
        }
      })
    }
    if(this.state.playerSelected.player_pos){
      this.state.players.map((a, index) => {
        if(a.rank === this.state.playerSelected.rank){
          const player = this.state.players.splice(index, 1);
          this.setTeam(player);
          this.state.players.splice(index, 1);
          this.setState({
            playerSelected: []
          })
          return
        }
      })
    }
    if(this.state.playerSelected.team_pos){
      this.state.dst.map((a, index) => {
        if(a.rank === this.state.playerSelected.rank){
          const player = this.state.dst.splice(index, 1);
          this.setTeam(player);
          this.state.dst.splice(index, 1);
          this.setState({
            playerSelected: []
          })
          return
        }
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

      {true && <TeamLog QB={this.state.QB} RB_One={this.state.RB_One} RB_Two={this.state.RB_Two} WR_One={this.state.WR_One} WR_Two={this.state.WR_Two} TE={this.state.TE} Kicker={this.state.kicks} Dst={this.state.defense} BN1={this.state.BN1} BN2={this.state.BN2} BN3={this.state.BN3} BN4={this.state.BN4} BN5={this.state.BN5}/>}
      
      {this.state.playerSelected.length !== 0 && <PlayerSelect playerSelected={this.state.playerSelected} imageFormater={this.imageFormater} draftPlayer={this.draftPlayer} />}
      {<br />}

      {true && <PosSelector PosSelection={this.PosSelection}/>}
      {<br />}

      {(this.state.displayAll || this.state.displayPlayer) && <PlayerTable players={this.state.players} PosSelected={this.state.PosSelected} Select={this.playerSelection} option={this.props.options} imageFormater={this.imageFormater} />}

      {(this.state.displayAll || this.state.displayKicker) && <KickerTable kicker={this.state.kicker} Select={this.playerSelection} option={this.props.options} imageFormater={this.imageFormater}/>}

      {(this.state.displayAll || this.state.displayDst) && <DstTable dst={this.state.dst} Select={this.playerSelection} imageFormater={this.imageFormater} />}
      
    </div>)
  }
}

export default App;


  
