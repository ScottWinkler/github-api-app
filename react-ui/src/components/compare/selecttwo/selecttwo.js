import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './selecttwo.css';
import {FormControl,ControlLabel,FormGroup,Button } from 'react-bootstrap';
import Spinner from 'react-spinkit';

export default class SelectTwo extends Component{
constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.state={first:null,second:null};
}
handleChange(e){
  var state = e.target.id;
 var value=e.target.value;
    if(state==="first"){
        this.setState({first:value});
    }
    else{
           this.setState({second:value});
    }
}
handleClick(){
    if(this.state.first&&this.state.second){
        var firstuser=this.props.users.find((user)=>{return user.profile.login===this.state.first});
          var seconduser=this.props.users.find((user)=>{return user.profile.login===this.state.second});
        this.props.setUser(firstuser,1);
        this.props.setUser(seconduser,2);
    }
}

    render(){
        const options = this.props.users.map((user,index)=><option value={user.profile.login} key={index}>{user.profile.login}</option>);
        return(
            <div className="SelectTwo">
 
                <FormGroup>
                    <ControlLabel>First User</ControlLabel>
                    <FormControl componentClass="select" id="first" onChange={this.handleChange} selected={this.state.first}>
                       <option value="other">...</option>
                        {options}
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Second User</ControlLabel>
                    <FormControl componentClass="select" id="second" onChange={this.handleChange} selected={this.state.second}>
                        <option value="other">...</option>
                        {options}
                    </FormControl>
                </FormGroup>
             <Button bsStyle="success" onClick={()=>{this.handleClick()}}>Compare</Button>
                {this.props.loading===true ? <Spinner  spinnerName="circle" className="SelectTwo-Spinner"/> : null}
            </div>
        )
    }
}