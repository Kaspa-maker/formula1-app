import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, FABButton, Icon } from 'react-mdl';
import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';
import AddDriver from './addDriver';

class Drivers extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="drivers-grid">
                    <TabOne />
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="drivers-grid">
                    <TabTwo />
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="drivers-grid">
                    <TabThree />
                </div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
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
                <AddDriver/>
                {/*<FABButton ripple>
                    <Icon name="add" />
                </FABButton>*/}
            </div>
        )
    }
}

export default Drivers;