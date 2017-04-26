import React, {Component} from 'react';
import './userlistitem.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {  Glyphicon } from 'react-bootstrap';

export default class UserListItem extends Component {
constructor(props){
    super(props);
    this.onClick=this.onClick.bind(this);
}
onClick(){
    this.props.selectUser(this.props.data);
}
    render() {
        var selected=this.props.activeUser && this.props.data.profile.login===this.props.activeUser.profile.login ? " UserListItem-Selected" : "";
        const cn="UserListItem"+selected;
        return (
            <li className={cn} onClick={()=>{this.onClick()}}>
                <h1>{this.props.data.profile.login} <Glyphicon className="UserListItem-Glyph" glyph="triangle-right"/></h1>
               
            </li>
        )}}