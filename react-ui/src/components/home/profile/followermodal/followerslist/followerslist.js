import React, { Component } from 'react';
import FollowerListItem from './followerslistitem/followerslistitem.js';
import './followerslist.css';
export default class FollowersList extends Component {

  render() {
    const listItems=  this.props.followers.map((follower,index)=><FollowerListItem key={index} src={follower.avatar_url} name={follower.login}/>)
    const divStyle={height:500}
    return (
<div className="FollowersList" style={divStyle}>
{listItems}
    </div>
    )}}