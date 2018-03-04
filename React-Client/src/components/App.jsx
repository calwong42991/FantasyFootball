import React from 'react';
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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      kicker: [],
      dst: []
    }
    this.getAllPlayers = this.getAllPlayers.bind(this);
    this.getAllKickers = this.getAllKickers.bind(this);
    this.getAllDst = this.getAllDst.bind(this);
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


  componentDidMount(){
    this.getAllDst()
  }

  render() {
    return (<div> 
      <NavBar />
      <h1>Fantasy Football</h1>
      {/* <PlayersList players={this.state.players}/> */}

      {false && <PlayerTable players={this.state.players} option={this.props.options} imageFormater={this.imageFormater} />}
      
      {false && <KickerTable kicker={this.state.kicker} option={this.props.options} imageFormater={this.imageFormater}/>}

      {false && <DstTable dst={this.state.dst} option={this.props.options} imageFormater={this.imageFormater}/>}

      

    </div>)
  }
}

export default App;


  
