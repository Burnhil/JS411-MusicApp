import React, { Component } from 'react';
import { AppBar, Typography } from '@material-ui/core'

//create navbar to be used on each page
class NavBar extends Component {
    //render the navbar
    render() {
        return <div>
            <div>
                <AppBar position="static">
                    <Typography variant="h5" className="toolBarTitle">My Music App</Typography>
                </AppBar>
            </div>
        </div>
    }
}

export default NavBar;