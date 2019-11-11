import React, { Component } from 'react';
import { Button, InputGroup, Input} from 'reactstrap';
class InfoNews extends Component {

    constructor(props){
        super(props);
        this.state={
            news: [],
            act: 0,
            index: ''
        }
    }

    componentDidMount(){
        this.refs.title.focus();
    }

    addInfo = (e) =>{
        let news = this.state.news;
        let title = this.refs.title.value;
        let shortdescription = this.refs.title.value;
        let author = this.refs.author.value;

        if(this.state.act === 0){
            let info = {
                title,shortdescription,author
            }
            news.push(info);
        }else{
            let index = this.state.index;
            news[index].title = title;
            news[index].shortdescription = shortdescription;
            news[index].author = author;
        }
        
        this.setState({
            news: news
        });

        this.refs.myForm.reset();
        this.refs.title.focus();
    }

    removeInfo = (i)=>{
        let news = this.state.news;
        news.splice(i,1);
        this.setState({
            news: news
        });

        this.refs.myForm.reset();
        this.refs.title.focus();
    }

    EditInfo = (i)=>{
        let info = this.state.news[i];
        this.refs.title.value = info.title;
        this.refs.title.value = info.shortdescription;
        this.refs.title.value = info.author;
        
        this.setState({
            act: 1,
            index: i
        })

        this.refs.title.focus();
    }

    render(){
        let news = this.state.news;
        return(
            <div className="info">
                <form ref="myForm" className="form">
                    <br/>
                    <InputGroup>
                    <Input type="text" ref="title" placeholder="Title"/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                    <Input type="textarea" ref="shortdescription" placeholder="Short Description"/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                    <Input type="text" ref="author" placeholder="Author"/>
                    </InputGroup>
                    <br/>
                    <Button onClick={(e)=>this.addInfo(e)}>Add</Button>
                </form>
                <pre>
                    {news.map((info, i) => 
                            <li key={i} className="list">
                                {i+1}. {info.title}, {info.shortdescription}, {info.author}
                                <Button onClick={()=>this.removeInfo(i)}>Remove</Button>
                                <Button onClick={()=>this.EditInfo(i)}>Edit</Button>
                            </li>
                        )}
                </pre>
            </div>
        )
    }
}
export default InfoNews;