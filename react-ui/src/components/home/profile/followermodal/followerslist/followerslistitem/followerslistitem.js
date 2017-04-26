import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import './followerslistitem.css';
export default class FollowersListItem extends Component {

  render() {

    return (
       
   <div className="FollowersListItem">
        <Image width={150} height={150} src={this.props.src} alt="follower pic"/>
        <h4>{this.props.name}</h4>
 </div>

  
  )
    }}