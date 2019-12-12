import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from 'react-mdl';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class addDriver extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.addNewDriver = this.addNewDriver.bind(this);
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

    addNewDriver() {
        var newName = document.getElementById('name').value;
        var newDescription = document.getElementById('description').value;
        var newLinkInsta = document.getElementById('linkInsta').value;
        var newLinkBackground = document.getElementById('linkBack').value;
        var newImage = document.getElementById('image').value;

        const newDriver = {
            name: newName,
            description: newDescription,
            linkInsta: newLinkInsta,
            linkBackground: newLinkBackground,
            image: newImage
        }

        fetch('http://localhost:8080/api/drivers', {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newDriver)
        })
        window.location.reload();
    }

    render() {
        return (
            <div>
                <Button style={{color: "red", marginLeft: "45%", marginTop: "10%"}} onClick={this.handleOpenDialog} raised ripple>Add Driver</Button>
                <Dialog open={this.state.openDialog} style={{width: "50%", height: "50%"}}>
                    <DialogTitle>Add new Driver</DialogTitle>
                    <DialogContent>
                        <InputGroup style={{marginBottom: "20px"}}>
                            <InputGroupAddon addonType="prepend">name</InputGroupAddon>
                            <Input id="name" />
                        </InputGroup>
                        <InputGroup style={{marginBottom: "20px"}}>
                            <InputGroupAddon addonType="prepend">description</InputGroupAddon>
                            <Input id="description" />
                        </InputGroup>
                        <InputGroup style={{marginBottom: "20px"}}>
                            <InputGroupAddon addonType="prepend">instagram link</InputGroupAddon>
                            <Input id="linkInsta" />
                        </InputGroup>
                        <InputGroup style={{marginBottom: "20px"}}>
                            <InputGroupAddon addonType="prepend">background link</InputGroupAddon>
                            <Input id="linkBack" />
                        </InputGroup>
                        <InputGroup style={{marginBottom: "20px"}}>
                            <InputGroupAddon addonType="prepend">image link</InputGroupAddon>
                            <Input id="image" />
                        </InputGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' onClick={this.addNewDriver}>Add Driver</Button>
                        <Button type='button' onClick={this.handleCloseDialog}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default addDriver;