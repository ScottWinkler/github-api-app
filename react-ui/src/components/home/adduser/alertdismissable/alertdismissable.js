import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Alert,Button } from 'react-bootstrap';

export default class AlertDismissable extends Component {

    render() {
        return (
            <Alert bsStyle="danger" onDismiss={this.props.handleAlertDismiss}>
          <h4>GitHub User Not Found!</h4>
          <p>Please check your spelling and try again</p>
            <Button bsStyle="danger" onClick={this.props.handleAlertDismiss}> Close</Button>
            </Alert>
        )}}