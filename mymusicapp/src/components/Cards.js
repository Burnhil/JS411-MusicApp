import React, { Component } from 'react';
import { Card, CardActions, CardContent, Typography, Grid, Paper, Switch, Slider, MenuItem, Select, FormControl } from '@material-ui/core';

//create cards to be rendered on dashboard
class Cards extends Component {
    //create construtor to store values for each cards button options
    constructor(props) {
        super(props)

        this.state = {
            value: true,
            volume: 20,
            quality: "none",
            open: false,
            notifications: [],
        }
    }

    componentDidUpdate = (prevProps, prevState) =>{
        //create variable to check length to be used to recall setstate
        let beforeChanges = this.state.notifications.length;
        //set notifications array back to 0 before checking each button variable
        if(this.state.notifications.length > 0){
            this.state.notifications.length = 0;
        }
        //check value, volume, quality for change is so add to array to be displayed
        if(this.state.value === false){
            this.state.notifications.push("Your application is offline. You won't be able to share or stream music to other devices.");
        }
        if(this.state.volume >= 80){
            this.state.notifications.push("Listening to music at a high volume could cause long-term hearing loss.")       
        }
        if(this.state.quality === 'low'){
            this.state.notifications.push("Music quality is degraded. Increase quality if your connection allows it.")
        }
        //testing to console
        // console.log(" prevstate length = "+ prevState.notifications.length);
        // console.log(" this.state.notifications length = "+ this.state.notifications.length);
        // console.log("beforechanges = " + beforeChanges)

        //call setstate by using beforeChanges variable from above
        if(prevState.notifications.length !== beforeChanges){
            console.log("we are in changes maybe");
            this.setState({
                notifications: this.state.notifications,
            });
        }
        //testing to console
        //console.log("this is component did update end notifications" + this.state.notifications);
    }

    //method used to toggleonline status from true to false
    toggleOnline = (e) => {
        //prevent button from changes pages
        e.preventDefault();
        //change state from true to false
        this.setState({
            value: !this.state.value,
        }, () => {
            console.log("online is now = " + this.state.value);
        })
      }

      //method used to togglevalume from 0-100
      toggleVolume = (e, value) => {
          //prevent button from changes pages
        e.preventDefault();
        //testing to console
        //    console.log("volume being clicked is = "  + this.state.volume);
        //    console.log(value);

        //change state to show from 0-100
        this.setState({
            volume: value
        }, () => {
            console.log("volume is now  = " + this.state.volume);
        })
      }

      toggleQuality = (e, value) => {
          //prevent button from changes pages
          //testing to console
        //console.log(e.target.value)
        
        //setting variable to be stored for quality
        let soundSlot = e.target.value;
        let soundQuality = {
            1: "low",
            2: "normal",
            3: "high"
        }
        //testing to console
        //console.log(soundQuality[1])
        //set state to show current quality
        this.setState({
            quality: soundQuality[soundSlot]
        }, () =>{
            console.log(soundQuality[soundSlot]);
        })
    
      }

    render() {

        //create each card to be used on dashboard
        return (
            <div><h2 className="headerDashboard">Welcome User!</h2>
                <Grid container className="cardGrid" justify="center" spacing={4}>
                    <Grid item>
                        <Paper>
                            <Card className="cardStyle">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Online Mode
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Is this application connected
                                    </Typography>
                                    <Typography>
                                        to the Internet?
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Switch checked={this.state.value} onChange={this.toggleOnline} ></Switch>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Card className="cardStyle">
                                <CardContent>

                                    <Typography variant="h5" component="h2">
                                        Master Volume
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Overrides all other sound
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        settings in this application
                                </Typography>
                                </CardContent>
                                <CardActions>
                                    <Slider
                                        defaultValue={20}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={10}
                                        marks
                                        min={10}
                                        max={100}
                                        onChange={this.toggleVolume}></Slider>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>

                            <Card className="cardStyle">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Sound Quality
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Manually control the music
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        quality in event of poor
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        connection
                                    </Typography>
                                </CardContent>
                                <CardActions>
    
                                <FormControl >
                                <Select
 
                                value={this.state.quality}
                                onChange={this.toggleQuality}
                                >
                                <MenuItem value={this.state.quality}>
                                    <em>{this.state.quality}</em>
                                </MenuItem>
                                <MenuItem value={1}>low</MenuItem>
                                <MenuItem value={2}>normal</MenuItem>
                                <MenuItem value={3}>high</MenuItem>

                                </Select>
                                </FormControl>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
                <div className="headerDashboard">
                <h2>System Notifications:</h2>
                 <p>{this.state.notifications[0]}</p>
                 <p>{this.state.notifications[1]}</p>
                 <p>{this.state.notifications[2]}</p>
                </div>
            </div>
        )

    }
}

export default Cards;