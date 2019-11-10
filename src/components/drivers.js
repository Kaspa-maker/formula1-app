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
                        <a href="https://en.wikipedia.org/wiki/Lewis_Hamilton" rel="noopener noreferrer" target="_blank"><Button colored>Background</Button></a>
                        <a href="https://www.instagram.com/lewishamilton/?hl=pl" rel="noopener noreferrer" target="_blank"><Button colored>Instagram</Button></a>
                    </CardActions>
                </Card>

                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.640.medium.jpg/1554818929157.jpg'}}>Valtteri Bottas</CardTitle>
                    <CardText>
                        Valtteri Viktor Bottas (born 28 August 1989) is a Finnish racing driver 
                        currently competing in Formula One with Mercedes, having previously driven for Williams from 2013 to 2016.
                    </CardText>
                    <CardActions border>
                        <a href="https://en.wikipedia.org/wiki/Valtteri_Bottas" rel="noopener noreferrer" target="_blank"><Button colored>Background</Button></a>
                        <a href="https://www.instagram.com/valtteribottas/?hl=pl" rel="noopener noreferrer" target="_blank"><Button colored>Instagram</Button></a>
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
                        <a href="https://en.wikipedia.org/wiki/Charles_Leclerc" rel="noopener noreferrer" target="_blank"><Button colored>Background</Button></a>
                        <a href="https://www.instagram.com/charles_leclerc/?hl=pl" rel="noopener noreferrer" target="_blank"><Button colored>Instagram</Button></a>
                    </CardActions>
                </Card>

                {/*<Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.640.medium.jpg/1567175200601.jpg'}}>Sebastian Vettel</CardTitle>
                    <CardText>
                    Sebastian Vettel (born 3 July 1987)[1] is a German racing driver who races in Formula One 
                    for Scuderia Ferrari. He is a four-time Formula One World Champion, having won consecutive 
                    titles in 2010–2013 with Red Bull Racing
                    </CardText>
                    <CardActions border>
                        <Button colored>Profile</Button>
                    </CardActions>
            </Card>*/}
            </div>
            )
        } else if(this.state.activeTab === 1){
            return(
            <div className="drivers-grid">
                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://pbs.twimg.com/profile_images/1171794348545052672/8BYyM6DY_400x400.jpg'}}>Nyck de Vries</CardTitle>
                    <CardText>
                        Nyck de Vries (born 6 February 1995) is a Dutch racing driver currently competing in 
                        Formula 2 for ART Grand Prix. He won the 2010 and 2011 Karting World Championships and 
                        in 2014 the Formula Renault 2.0 Alps and Formula Renault 2.0 Eurocup Championships. 
                        He was signed to the McLaren young driver programme from January 2010 until May 2019, 
                        and Audi Sport racing academy in 2016. In 2019 he won the FIA Formula 2
                        World Championship
                    </CardText>
                    <CardActions border>
                        <a href="http://www.fiaformula2.com/Teams-and-Drivers/Drivers/Nyck-de-Vries/" rel="noopener noreferrer" target="_blank"><Button colored>Profile</Button></a>
                    </CardActions>
                </Card>

                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.motorsport-total.com/img/2019/190828/279039_w620_h500.jpg?ts=1566974192'}}>Nicholas Latifi</CardTitle>
                    <CardText>
                        Nicholas Latifi (born 29 June 1995) is a Canadian racing driver. 
                        He formerly served as Racing Point Force India's F1 development driver, 
                        and in 2019 he became Williams's test and reserve driver.
                    </CardText>
                    <CardActions border>
                        <a href="http://www.fiaformula2.com/Teams-and-Drivers/Drivers/Nicholas-Latifi/" rel="noopener noreferrer" target="_blank"><Button colored>Profile</Button></a>
                    </CardActions>
                </Card>

                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.thisisf1.com/wp-content/uploads/2019/08/Luca-Ghiotto-2020-F1-430x287.jpg'}}>Nicholas Latifi</CardTitle>
                    <CardText>
                    Luca Ghiotto (born 24 February 1995) is an Italian racing driver currently competing in 
                    Formula 2 for UNI-Virtuosi Racing, and FIA WEC with Ginetta.
                    </CardText>
                    <CardActions border>
                        <a href="http://www.fiaformula2.com/Teams-and-Drivers/Drivers/Luca-Ghiotto/" rel="noopener noreferrer" target="_blank"><Button colored>Profile</Button></a>
                    </CardActions>
                </Card>
            </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="drivers-grid">
                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://smpracing.tv/upload/resize_cache/iblock/f92/736_384_2/f925bbffb357466fc80f4f9980ec7ac2.JPG'}}>Robert Shwartzman</CardTitle>
                    <CardText>
                        Robert Mikhailovich Shwartzman (born 16 September 1999) is a Russian racing driver 
                        currently competing in the FIA Formula 3 Championship. He is a member of the Ferrari Driver Academy. 
                        He is the 2018 Toyota Racing Series champion and the 2019 FIA Formula 3 champion.
                    </CardText>
                    <CardActions border>
                        <a href="http://www.fiaformula3.com/Teams-and-Drivers/Drivers/Robert-Shwartzman/" rel="noopener noreferrer" target="_blank"><Button colored>Profile</Button></a>
                    </CardActions>
                </Card>

                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://pbs.twimg.com/profile_images/1122919050219278338/tny--5SG_400x400.jpg'}}>Marcus Armstrong</CardTitle>
                    <CardText>
                        Marcus Armstrong (born 29 July 2000) is a New Zealand motor racing 
                        driver who competes in the 2019 FIA F3 Championship for Prema Powerteam.
                    </CardText>
                    <CardActions border>
                        <a href="http://www.fiaformula3.com/Teams-and-Drivers/Drivers/Marcus-Armstrong/" rel="noopener noreferrer" target="_blank"><Button colored>Profile</Button></a>
                    </CardActions>
                </Card>

                <Card shadow={6} style={{width: '400px', height: '400px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://images.financialexpress.com/2017/07/Jewan-Ashok-Twitter.jpg'}}>Jehan Daruvela</CardTitle>
                    <CardText>
                        Jehan Daruvala (born 1 October 1998) is an Indian racing driver, currently competing in the FIA 
                        Formula 3 Championship with Prema Powerteam. He is a protégé of the Force India F1 team, 
                        after being one of three winners of a 'One in a Billion hunt' organized by the team in 2011
                    </CardText>
                    <CardActions border>
                        <a href="http://www.fiaformula3.com/Teams-and-Drivers/Drivers/Jehan-Daruvala/" rel="noopener noreferrer" target="_blank"><Button colored>Profile</Button></a>
                    </CardActions>
                </Card>
            </div>
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