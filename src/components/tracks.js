import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, Button, CardActions} from 'react-mdl';

class Tracks extends Component {
    render(){
        return(
            <div className="category-tabs">
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            <div className="drivers-grid">
                                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.austadiums.com/stadiums/photos/albert-park.jpg'}}>Melbourne Grand Prix</CardTitle>
                                    <CardText>
                                        The Melbourne Grand Prix Circuit is a street circuit around Albert Park Lake, only a few kilometres 
                                        outh of central Melbourne. It is used annually as a racetrack for the Formula One Australian Grand Prix, 
                                        Supercars Championship Melbourne 400 and associated support races. The circuit has an FIA Grade 1 licence.
                                    </CardText>
                                    <CardActions border>
                                        <a href="https://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit" rel="noopener noreferrer" target="_blank"><Button colored>If you want to learn more press here</Button></a>
                                    </CardActions>
                                </Card>

                                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fhtsi-ez-prod%2Fez%2Fimages%2F5%2F8%2F5%2F0%2F930585-1-eng-GB%2F354a4235-9da4-4b7e-afef-39422288175b.jpg?width=620&dpr=1&format=jpg&source=htsi'}}>Bahrain Grand Prix</CardTitle>
                                    <CardText>
                                        The Bahrain International Circuit is a motorsport venue opened in 2004 and used for drag racing, 
                                        GP2 Series and the annual Bahrain Grand Prix. The 2004 Grand Prix was the first held in the Middle East.
                                    </CardText>
                                    <CardActions border>
                                        <a href="https://en.wikipedia.org/wiki/Bahrain_Grand_Prix" rel="noopener noreferrer" target="_blank"><Button colored>If you want to learn more press here</Button></a>
                                    </CardActions>
                                </Card>

                                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                                    <CardTitle expand style={{color: '#fff', background: 'url(https://i.pinimg.com/474x/f9/f4/95/f9f495fb26739fe14f84d3d2408da8d4--aerial-view-race-tracks.jpg'}}>Chinese Grand Prix</CardTitle>
                                    <CardText>
                                        The Shanghai International Circuit is a motorsport race track, situated in the Jiading District, Shanghai. 
                                        The circuit is best known as the venue for the annual Formula 1 Chinese Grand Prix which has been hosted since 2004.
                                    </CardText>
                                    <CardActions border>
                                        <a href="https://en.wikipedia.org/wiki/Chinese_Grand_Prix" rel="noopener noreferrer" target="_blank"><Button colored>If you want to learn more press here</Button></a>
                                    </CardActions>

                                </Card>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Tracks;