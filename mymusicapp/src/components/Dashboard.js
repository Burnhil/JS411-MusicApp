import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Cards from './Cards.js';


//create dashboard page to be displayed
class Dashboard extends Component {
    //create constructor to use if needed
    constructor (props){
        super(props)
    }
    //render the dashboard page by calling individual components
    render() {
        return <div>
            <div>
            <NavBar />
            <Cards />
            </div>
        </div>
    }
}

export default Dashboard;