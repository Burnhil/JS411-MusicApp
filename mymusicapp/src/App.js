import React, { Component } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core'
import Dashboard from './components/Dashboard.js'
import NavBar from './components/NavBar.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  //create method to toggle log in from true to false
  toggleLogin = (e) => {
    //prevent form from changes pages
    e.preventDefault();
    //set state for loggin
    this.setState({
      loggedIn: !this.state.loggedIn,
    }, () => {
      console.log("loggedIn is now = " + this.state.loggedIn);
    })
  }

  render() {
    //call render function to show Dashboard when logged in
  
    return this.state.loggedIn ?  <Dashboard /> : (
      // this code shows the actual logged in screen
      <div className="App">
        {/*call navigation bar to display at the top */}
        <NavBar />
        {/*call the components for display   */}
        <div className="logInBox">
          <TextField label="UserName *" /><br />
          <TextField label="Password *" /><br /><br />
          <Button variant="contained" size="large" color="primary" onClick={this.toggleLogin}>Click Me</Button><br />
        </div>
      </div>
    )
  }


}

export default App;
