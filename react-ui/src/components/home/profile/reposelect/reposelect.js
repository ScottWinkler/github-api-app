import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

export default class RepoSelect extends Component {

    render() {
        const options = this.props.users
        .filter(function(data){return data.profile.login!== this.props.activeUser.login})
        .map((data,index)=><option value={data.profile.login} key={index}>{data.profile.login}</option> );
        return(
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Compare To</ControlLabel>
      <FormControl componentClass="select" placeholder="select user">
        {options}
      </FormControl>
    </FormGroup>)}}