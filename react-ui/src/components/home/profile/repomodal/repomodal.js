import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import { Modal, Tabs,Tab } from 'react-bootstrap';
import './repomodal.css';
import Measure from 'react-measure';
import RepoSettings from './reposettings/reposettings.js';
import ListChart from './listchart/listchart.js';
import StarChart from './starchart/starchart.js';
export default class RepoModal extends Component {
    constructor(props) {
        super(props);
        this.handleSelect=this.handleSelect.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            filters:null,
            key:1,
            dimensions: {
                width: -1
            }
        };
    }

    close() {
        this.setState({filters:null,key:1});
        this.props.close();
    }
handleSelect(key) {
    this.setState({key});
  }
    render() {
        const { width } = this.state.dimensions
        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.close()} bsSize="large" animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.activeUser.profile.login}'s Repositories</Modal.Title>
                    </Modal.Header>
         
                        <Modal.Body>
                            <Measure onMeasure={(dimensions) => { this.setState({ dimensions }) }}>
                            <Tabs id="view" activeKey={this.state.key} onSelect={this.handleSelect} animation={false}>
                                <Tab eventKey={1} title="List">
                                  <ListChart repos={this.props.activeUser.repos} height={Math.floor(width/4)} filters={this.state.filters}/>
                                </Tab>
                                           
                                <Tab eventKey={2} title="Stars">
                                    
                                    <StarChart repos={this.props.activeUser.repos} width={width} />
                              
                                </Tab>
                                   
                            </Tabs>
                            </Measure>

                        </Modal.Body>
                 
                    <Modal.Footer >
                      <RepoSettings {...this.props} close={this.close} tab={this.state.key} handleSubmit={(filters)=>{this.setState({filters:filters})}}/>
                      
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

