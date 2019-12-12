import React, { Component } from 'react';
import {Card, CardText, CardTitle, Button, CardActions} from 'react-mdl';
//import api from '../dataStore/stubAPI';
import * as api from '../api';

export default class tabOne extends Component{

    constructor(props){
        super(props);
        this.state = {
            drivers: [],
        }
        this.deleteDriver = this.deleteDriver.bind(this);
    }
    //state = {drivers: [{}]};

    componentDidMount() {
            fetch(`http://localhost:8080/api/drivers`)
                .then(response => response.json())
                .then(data => this.setState({ drivers: data}));
        
        /*api.getAll().then(resp => {
            this.setState({
                drivers: resp.drivers
            });
        }).catch(console.error);*/
    };
    
    deleteDriver(driverId){
        fetch("http://localhost:8080/api/drivers/" + driverId, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            window.location.reload();
    }

    render(){
        const {drivers} =  this.state;
        
        //let drivers = api.getAllf1();
        return(
            <>
            {drivers.map(driver => 
                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: `url(${driver.image}`}}>{driver.name}</CardTitle>
                <CardText>
                    {driver.description}
                </CardText>
                <CardActions border>
                    <a href={driver.linkBackground} rel="noopener noreferrer" target="_blank"><Button colored>Background</Button></a>
                    <a href={driver.linkInsta} rel="noopener noreferrer" target="_blank"><Button colored>Instagram</Button></a>
                    <Button style={{color: "red", marginLeft: "44px"}} onClick={() => this.deleteDriver(driver._id)}>Remove</Button>
                </CardActions>
            </Card>
                )}
                </>
        )
    }
}