import React,  { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from '../components/main';
import '../App.css';
import fire from '../config/fire';

class Home extends Component{
    constructor(props){
        super(props);
            this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }

    render(){
        return (
          <div style={{height: '100vh', position: 'relative'}}>
          <Layout >
              <Header className="header-color" title="Formula for the Fans" style={{color: 'black'}}>
                  <Navigation>
                    <Link to="/mainpage">Home</Link>
                    <Link to="/drivers">Drivers</Link>
                    <Link to="/tracks">Tracks</Link>
                    <Link to="/infonews">Info</Link>
                    <Link to="/about">About Us</Link>
                    <button type="danger" onClick={this.logout} class="btn btn-primary">Logout</button>
                  </Navigation>
              </Header>
              <Drawer title="Menu">
                  <Navigation>
                    <a href="https://www.formula1.com" rel="noopener noreferrer" target="_blank">F1</a>
                    <a href="http://www.fiaformula2.com" rel="noopener noreferrer" target="_blank">F2</a>
                    <a href="http://www.fiaformula3.com" rel="noopener noreferrer" target="_blank">F3</a>
                    <Link to="/about">About Us</Link>
                  </Navigation>
              </Drawer>
              <Main/>
              <Content />
              <Footer size="mini">
                <FooterSection type="left" logo="Formula for the Fans TM">
                    <FooterLinkList>
                        <a href="https://support.google.com" rel="noopener noreferrer" targer="_blank">Help</a>
                        <a href="https://policies.google.com" rel="noopener noreferrer" targer="_blank">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
              </Footer>
          </Layout>
      </div>
        );
      }
}

export default Home;