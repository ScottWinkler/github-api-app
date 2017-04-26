import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Image } from 'react-bootstrap';
import './avatar.css';

export default class Avatar extends Component {

  render() {
    return (
        <div className="Avatar">
        <Image src={this.props.src} alt="user picture" rounded/>
        <h2>{this.props.username}</h2>
        </div>
    )}}