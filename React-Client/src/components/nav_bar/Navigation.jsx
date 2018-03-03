import React, {Component} from 'react';
import Login from './Login';
import Signup from './Signup';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div>
      <button> Home </button>
      <button> Login </button>
      <button> Signup </button>
      {/*<Login/>
      <Signup />*/}
    </div>)
  }
}

export default NavBar;