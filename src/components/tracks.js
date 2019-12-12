import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, CardTitle, Button, CardActions,DialogActions, DialogContent, DialogTitle, Dialog } from 'react-mdl';
//import api from '../dataStore/stubAPI';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class Tracks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
        }
        this.deleteTrack = this.deleteTrack.bind(this);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.addNewTrack = this.addNewTrack.bind(this);
    }


    componentDidMount() {
        fetch(`http://localhost:8080/api/tracks`)
            .then(response => response.json())
            .then(data => this.setState({ tracks: data }));
    };

    deleteTrack(trackId) {
        fetch("http://localhost:8080/api/tracks/" + trackId, {
            method: 'DELETE',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        window.location.reload();
    }


    handleOpenDialog() {
        this.setState({
            openDialog: true
        });
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }

    addNewTrack() {
        var newName = document.getElementById('name').value;
        var newDescription = document.getElementById('description').value;
        var newLink = document.getElementById('link').value;
        var newImage = document.getElementById('image').value;

        const newTrack = {
            name: newName,
            description: newDescription,
            link: newLink,
            image: newImage
        }

        fetch('http://localhost:8080/api/tracks', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTrack)
        })
        window.location.reload();
    }


    render() {
        const { tracks } = this.state;
        //let tracks = api.getAlltracks();
        return (
            <div className="category-tabs">
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            <div className="drivers-grid">
                                {tracks.map(track =>
                                    <Card shadow={6} style={{ width: '400px', height: '400px', margin: 'auto' }}>
                                        <CardTitle expand style={{ color: '#fff', background: `url(${track.image}` }}>{track.name}</CardTitle>
                                        <CardText>
                                            {track.description}
                                        </CardText>
                                        <CardActions border>
                                            <a href={track.link} rel="noopener noreferrer" target="_blank"><Button colored>If you want to learn more press here</Button></a>
                                            <Button style={{ color: "red", marginLeft: "44px" }} onClick={() => this.deleteTrack(track._id)}>Remove</Button>
                                        </CardActions>
                                    </Card>
                                )}
                            </div>
                        </div>
                    </Cell>
                </Grid>

                <Button style={{ color: "red", marginLeft: "45%", marginTop: "10%" }} onClick={this.handleOpenDialog} raised ripple>Add Track</Button>
                <Dialog open={this.state.openDialog} style={{ width: "50%", height: "50%" }}>
                    <DialogTitle>Add new Track</DialogTitle>
                    <DialogContent>
                        <InputGroup style={{ marginBottom: "20px" }}>
                            <InputGroupAddon addonType="prepend">name</InputGroupAddon>
                            <Input id="name" />
                        </InputGroup>
                        <InputGroup style={{ marginBottom: "20px" }}>
                            <InputGroupAddon addonType="prepend">description</InputGroupAddon>
                            <Input id="description" />
                        </InputGroup>
                        <InputGroup style={{ marginBottom: "20px" }}>
                            <InputGroupAddon addonType="prepend">link</InputGroupAddon>
                            <Input id="link" />
                        </InputGroup>
                        <InputGroup style={{ marginBottom: "20px" }}>
                            <InputGroupAddon addonType="prepend">image link</InputGroupAddon>
                            <Input id="image" />
                        </InputGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' onClick={this.addNewTrack}>Add Track</Button>
                        <Button type='button' onClick={this.handleCloseDialog}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Tracks;