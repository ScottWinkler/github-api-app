import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Alert,Button } from 'react-bootstrap';

export default class AlertDismissable extends Component {

    render() {
        return (
            <Alert bsStyle="danger" onDismiss={this.props.handleAlertDismiss}>
           {this.props.error==="GET_USER_ERROR" ? (<div><h4>GitHub User Not Found!</h4>
          <p>Please check your spelling and try again</p> </div>) :null}     
          {this.props.error==="NOT_UNIQUE_USER" ? (<div><h4>Not a Unique Search!</h4>
          <p>Someone else searched for this within the last two minutes</p> </div>) :null}   
            <Button bsStyle="danger" onClick={this.props.handleAlertDismiss}> Close</Button>
            </Alert>
        )}}