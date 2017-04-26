import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './navtoolbar.css';
import { Nav,NavItem } from 'react-bootstrap';

export default class NavToolBar extends Component{
    constructor(props){
        super(props);
        this.handleSelect=this.handleSelect.bind(this);
        this.state={key:1};
    }
    handleSelect(key){
        this.setState({key});
    }
    render(){
        return(
            <Nav bsStyle="pills" activeKey={this.state.key} onSelect={this.handleSelect} id="nav">
                <NavItem eventKey={1} onClick={()=>{this.props.push("/")}} >Home</NavItem>
                <NavItem eventKey={2} onClick={()=>{this.props.push("/compare");this.props.setFirst(null);this.props.setSecond(null) ;}} >Compare Users</NavItem>
            </Nav>
        )
    }
}