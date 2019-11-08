import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, Button, CardActions} from 'react-mdl';

class Drivers extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="drivers-grid">
                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.640.medium.jpg/1554818913486.jpg'}}>Lewis Hamilton</CardTitle>
                    <CardText>
                        Lewis Carl Davidson Hamilton(born 7 January 1985) is a British racing driver who races 
                        in Formula One for Mercedes-AMG Petronas Motorsport. A six-time Formula One World Champion
                    </CardText>
                    <CardActions border>
                        <Button colored>Profile</Button>
                    </CardActions>
                </Card>

                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.640.medium.jpg/1554818929157.jpg'}}>Valtteri Bottas</CardTitle>
                    <CardText>
                        Valtteri Viktor Bottas (born 28 August 1989) is a Finnish racing driver 
                        currently competing in Formula One with Mercedes, having previously driven for Williams from 2013 to 2016.
                    </CardText>
                    <CardActions border>
                        <Button colored>Profile</Button>
                    </CardActions>
                </Card>

                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.640.medium.jpg/1567179277948.jpg'}}>Charles Leclerc</CardTitle>
                    <CardText>
                        Charles Leclerc (born 16 October 1997) is a Monégasque racing driver, 
                        currently driving in Formula One for Ferrari. Leclerc won the GP3 Series championship 
                        in 2016 and the FIA Formula 2 Championship in 2017.
                    </CardText>
                    <CardActions border>
                        <Button colored>Profile</Button>
                    </CardActions>
                </Card>
            </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div><h1>Hamilton</h1></div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div><h1>Hamilton</h1></div>
            )
        }
    }
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>F1 Grid</Tab>
                    <Tab>F2 Grid</Tab>
                    <Tab>F3 Grid</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Drivers;