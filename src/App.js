import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{height: '965px', position: 'relative'}}>
    <Layout >
        <Header className="header-color" title="Formula for the Fans" style={{color: 'black'}}>
            <Navigation>
              <Link to="/mainpage">Home</Link>
              <Link to="/drivers">Drivers</Link>
              <Link to="/tracks">Tracks</Link>
              <Link to="/infonews">Info</Link>
              <Link to="/about">About Us</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
              <a href="https://www.formula1.com" rel="noopener" target="_blank">F1</a>
              <a href="http://www.fiaformula2.com" rel="noopener" target="_blank">F2</a>
              <a href="http://www.fiaformula3.com" rel="noopener" target="_blank">F3</a>
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
