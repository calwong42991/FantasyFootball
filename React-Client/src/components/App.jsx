import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import PlayersList from './PlayersList';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import NavBar from './nav_bar/Navigation';
import PlayerTable from './PlayerTable';

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
    return (<div> 
      <NavBar />
      <h1>Fantasy Football</h1>
      {/* <PlayersList players={this.state.players}/> */}
      <PlayerTable players={this.state.players} option={this.props.options} imageFormater={this.imageFormater} />
    </div>)
  }
}

export default App;


  
