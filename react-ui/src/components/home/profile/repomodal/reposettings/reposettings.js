import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React, { Component } from 'react';
import {Button,Panel} from 'react-bootstrap';
import RepoFilter from './repofilter/repofilter.js';
import './reposettings.css';
export default class RepoSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
        <div className="RepoSettings">
            {this.props.tab === 1 ?
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    Optional Filters
                </Button>

                : null
            }
            {" "}
            <Button onClick={() => this.props.close()} className="RepoModal-Close">Close</Button>
            {this.props.tab === 1 ?
                <Panel collapsible expanded={this.state.open} className="RepoSettings-Panel">
                  
                <RepoFilter handleSubmit={this.props.handleSubmit}/>
        </Panel>
                : null
            }
        </div>
    );
  }
}