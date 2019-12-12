import React, { Component } from 'react';
import {Card, CardText, CardTitle, Button, CardActions} from 'react-mdl';
import api from '../dataStore/stubAPI';

export default class tabThree extends Component{
    render(){
        let drivers = api.getAllf3();
        return(
            <>
            {drivers.map(driver => 
                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: `url(${driver.image}`}}>{driver.name}</CardTitle>
                <CardText>
                    {driver.description}
                </CardText>
                <CardActions border>
                    <a href={driver.profile} rel="noopener noreferrer" target="_blank"><Button colored>Profile</Button></a>
                </CardActions>
            </Card>
                )}
                </>
        )
    }
}