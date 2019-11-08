import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{height: '600px', position: 'relative'}}>
    <Layout style={{background: 'url(f1main.jpg) center / cover'}}>
        <Header title="Title" style={{color: 'black'}}>
            <Navigation>
                <Link to="/drivers">Drivers</Link>
                <Link to="/tracks">Tracks</Link>
                <Link to="/infonews">Info</Link>
                <Link to="/about">About Us</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">F1</Link>
                <Link to="/">F2</Link>
                <Link to="/">F3</Link>
                <Link to="/about">About Us</Link>
            </Navigation>
        </Drawer>
        <Main/>
        <Content />
    </Layout>
</div>
  );
}

export default App;
