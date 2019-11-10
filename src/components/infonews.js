import React, { Component } from 'react';
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

class InfoNews extends Component {
    state = {
        news:[],
        newNewsData:{
            title:'',
            shortdescription:'',
            author:''
        },
        newInfoModal: false
    }
    componentWillMount(){
        axios.get('http://localhost:3000/infonews').then((response) => {
            this.setState({
                news: response.data
            })
        });
    }

    toggleNewInfoModal(){
        this.setState({
            newInfoModal: ! this.state.newInfoModal
        })
    
    }

    addInfo(){
        axios.post('http://localhost:3000/infonews', this.state.newNewsData).then((response) => {
        console.log(response.data);
        let{ news } = this.state;
            news.push(response.data);
            this.setState({news, newInfoModal: false, newNewsData:{
                title:'',
                shortdescription:'',
                author:''
            }});
        });
    }
    render(){
        let news = this.state.news.map((info) => {
            return(
                <tr key={info.id}>
                    <td>{info.title}</td>
                    <td>{info.shortdescription}</td>
                    <td>{info.author}</td>
                    <td><Button color="success" size="sm">Edit</Button></td>
                    <td><Button color="danger" size="sm">Delete</Button></td>
                </tr>
            )
        });
        return(
            <div className="info-table">
                <Button color="primary" onClick={this.toggleNewInfoModal.bind(this)}>Add new rumour to the grid</Button>
                <Modal isOpen={this.state.newInfoModal} toggle={this.toggleNewInfoModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewInfoModal.bind(this)}>Add some Info</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input name="Title" id="title" value={this.state.newNewsData.title}onChange={(e) =>{
                                        let {newNewsData} = this.state;
                                        newNewsData.title = e.target.value;
                                        this.setState({newNewsData});
                                    }}/>
                                    <Label for="exampleText">Short Descritpion</Label>
                                    <Input name="Short Description" id="shortdescription" value={this.state.newNewsData.shortdescription}onChange={(e) =>{
                                        let {newNewsData} = this.state;
                                        newNewsData.shortdescription = e.target.value;
                                        this.setState({newNewsData});
                                    }}/>
                                    <Label for="title">Author</Label>
                                    <Input name="Author" id="author" value={this.state.newNewsData.author}onChange={(e) => {
                                        let {newNewsData} = this.state;
                                        newNewsData.author = e.target.value;
                                        this.setState({newNewsData});
                                    }}/>
                                </FormGroup>
                            </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.addInfo.bind(this)}>Add</Button>{' '}
                        <Button color="secondary" onClick={this.toggleNewInfoModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Short Descritpion</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default InfoNews;