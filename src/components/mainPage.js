import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection, FooterLinkList} from 'react-mdl';
 

class MainPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                    <img src="f1main.jpg" alt="f1car" className="f1car-img"/>
                    <div className="banner-text">
                        <h1>Welcome Formula 1 fans</h1>
                        <hr/>
                        <p>Welcome this fan made formula 1 app. In here you can see all the drivers on the grid,
                            tracks that are ongoing and any new addition. We also have an rumour and info tab that
                            allows you to follow what is going on in the paddock and on the grid</p>
                        <hr/>
                        <p>If you want to visit the official web pages for Formula 1,2 and 3 press the table on the left
                            and will show you 3 tabs to click</p>
                    </div>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default MainPage;