import React, {Component} from 'react';
import './adduser.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Button,FormControl,Form,FormGroup,ControlLabel } from 'react-bootstrap';
import AlertDismissable from './alertdismissable/alertdismissable.js';
import Spinner from 'react-spinkit';
export default class AddUser extends Component {
constructor(props){
    super(props);
    this.handleAlertDismiss=this.handleAlertDismiss.bind(this);
    this.handleAlertShow=this.handleAlertShow.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.state={alertVisible:false, text_input:"" };
}

handleAlertDismiss(){
    this.setState({alertVisible:false});
    this.props.acknowledgeError(null);
}
handleAlertShow(){
    this.setState({alertVisible:true});
}
    handleChange(e){
        var state = e.target.id;
        var value=e.target.value;
        this.setState({[state]:value});
    }
handleClick(){
 var self = this;
this.props.acknowledgeError(null);
this.setState({alertVisible:false});
 this.props.addUser(this.state.text_input,this.props.id_user, self.handleAlertShow);
 this.setState({text_input:""});
}
    render() {
        return (
            <div className="AddUser">
                <Form inline>
                    <FormGroup>
                        <ControlLabel>GitHub User</ControlLabel>
                        {" "}
                        <FormControl type="text" id="text_input" placeholder="Enter A GitHub User" value={this.state.text_input} onChange={this.handleChange} />
                    </FormGroup>
                       {" "}
                    <Button bsStyle="primary" onClick={this.handleClick}>Add GitHub User</Button>
                    {" "}
                    {this.props.loading===true ? <Spinner className="AddUser-Spinner" spinnerName="circle" noFadeIn/> : null}
                </Form>
                {this.state.alertVisible ? <AlertDismissable handleAlertDismiss={this.handleAlertDismiss} error={this.props.error}/> : null}
            </div>

        )}
    }
