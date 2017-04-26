import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import './comparestats.css';
import { Tab,Tabs } from 'react-bootstrap';
import CodeChart from './codechart/codechart.js';
import CommitChart from './commitchart/commitchart.js';

export default class CompareStats extends Component {
    constructor(props) {
        super(props);
        this.handleSelect=this.handleSelect.bind(this);
        this.state = { key:1 };
    }
handleSelect(key) {
    this.setState({key});
  }
    render() {
        const first_data=this.props.first_data.toObject();
        const second_data=this.props.second_data.toObject();
        const commitData=[
            {name: this.props.first.profile.login,
                commits: first_data.commits},
            {name: this.props.second.profile.login, 
                commits: second_data.commits}];
        const codeData=[
            {name: this.props.first.profile.login,
                ifs_per_1000_tokens: (1000*first_data.ifs)/first_data.total_tokens,
                fors_per_1000_tokens:(1000*first_data.fors)/first_data.total_tokens
            },
                {name: this.props.second.profile.login,
                ifs_per_1000_tokens: (1000*second_data.ifs)/second_data.total_tokens,
                fors_per_1000_tokens:(1000*second_data.fors)/second_data.total_tokens
            }
           ];
     console.log(commitData);
     console.log(codeData);
        return (
            <Tabs id="view" activeKey={this.state.key} onSelect={this.handleSelect} animation={false}>
                <Tab eventKey={1} title="Static Code Metrics">
                    <CodeChart codeData={codeData}/>
                </Tab>

                <Tab eventKey={2} title="Commit Frequency">
                    <CommitChart commitData={commitData}/>
                </Tab>
            </Tabs>
            )
    }}