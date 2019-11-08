import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
    render(){
        return(
            <div className="about-us">
                <Grid className="about-grid">
                    <Cell col={4}>
                        <h2>Formula Fans</h2>
                        <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/1e/a2/53/1ea253a3-f61f-f899-6772-5f346395df16/source/256x256bb.jpg"
                        alt="logo"
                        style={{height: '250px'}}
                        />
                    </Cell>
                    <Cell col={4}>
                        <h2>About Us</h2>
                        <hr/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '2em'}}>We started this app to help fans around the world join in
                            the great world of F1. We created this app so you can find all the necessary
                            information about Formula 1 and 2 and 3 can be in one place thats easy to use.
                        </p>
                    </Cell>
                    <Cell col={4}>
                        <h2>Contact Us</h2>
                        <hr/>
                        <div className="contacts">
                        <List>
                            <ListItem threeLine>
                                <ListItemContent style={{fontSize: '15px', fontFamily: 'Big Shoulders Text'}} subtitle="If you want to work for us email us here">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    blabla@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem threeLine>
                                <ListItemContent style={{fontSize: '15px', fontFamily: 'Big Shoulders Text'}} subtitle="If there is any issues email us here">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    Tralalal@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem threeLine>
                                <ListItemContent style={{fontSize: '15px', fontFamily: 'Big Shoulders Text'}} subtitle="If you would like to help us with the app and you think you have a great idea email us here">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    Fufuru@gmail.com
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;