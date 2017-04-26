import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import {Table,FormControl,ButtonToolbar,Button,Checkbox} from 'react-bootstrap';
import './repofilter.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import NumericInput from 'react-numeric-input';
export default class RepoFilter extends Component {

  constructor(props) {
    super(props);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleForksMinChange = this.handleForksMinChange.bind(this);
    this.handleForksMaxChange = this.handleForksMaxChange.bind(this);
    this.handleStarsMinChange = this.handleStarsMinChange.bind(this);
    this.handleStarsMaxChange = this.handleStarsMaxChange.bind(this);
    this.handleOpenIssuesMinChange = this.handleOpenIssuesMinChange.bind(this);
    this.handleOpenIssuesMaxChange = this.handleOpenIssuesMaxChange.bind(this);
    this.handleReset=this.handleReset.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleCheck=this.handleCheck.bind(this);
    this.handleNameChange=this.handleNameChange.bind(this);
    this.state = {
    name_selected:false,
      forks_selected:false,
      stars_selected:false,
      open_issues_selected:false,
      date_selected:false,
      name: "",
      name_regex:"",
      forks_min: null,
      forks_max: null,
      stars_min: null,
      stars_max: null,
      open_issues_min: null,
      open_issues_max: null,
      startDate: moment(),
      endDate: moment()
    }
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    })
  }
  handleEndDateChange(date) {
    this.setState({
      endDate: date
    })
  }
  handleForksMinChange(num) {
    this.setState({
      forks_min: num
    })
  }
  handleForksMaxChange(num) {
    this.setState({
      forks_max: num
    })
  }
  handleStarsMinChange(num) {
    this.setState({
      stars_min: num
    })
  }
  handleStarsMaxChange(num) {
    this.setState({
      stars_max: num
    })
  }
  handleOpenIssuesMinChange(num) {
    this.setState({
      open_issues_min: num
    })
  }
  handleOpenIssuesMaxChange(num) {
    this.setState({
      open_issues_max: num
    })
  }
  handleNameChange(e){
      var str=e.target.value;
      var regexString="^"+str+"\.*";
    var regex=new RegExp(regexString,'i');
    this.setState({
      name:str,
      name_regex:regex
    })
  }
  handleReset(){
    this.setState({
      name_selected:false,
      forks_selected:false,
      stars_selected:false,
      open_issues_selected:false,
      date_selected:false,
      name: "",
      name_regex:"",
      forks_min: null,
      forks_max: null,
      stars_min: null,
      stars_max: null,
      open_issues_min: null,
      open_issues_max: null,
      startDate: moment(),
      endDate: moment()
    });
    this.props.handleSubmit(null);
  }
  handleSubmit(){
    this.props.handleSubmit(this.state);
  }
  handleCheck(e){
        var state = e.target.id;
        var value=!this.state[state];
        this.setState({[state]:value});
  }
  render() {
    return (
      <div className="RepoFilter">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Filter By</th>
              <th>Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Checkbox id="name_selected" onChange={this.handleCheck} checked={this.state.name_selected}>Name</Checkbox>
              </td>
              <td>
                <FormControl type="text" id="name" onChange={this.handleNameChange} value={this.state.name}/>
              </td>
            </tr>
            <tr>

              <td>
                <Checkbox id="date_selected" onChange={this.handleCheck} checked={this.state.date_selected}>Date Created</Checkbox>
              </td>
              <td>
                Start Date
              {" "}
                <DatePicker
                  id="startDate"
                  selected={this.state.startDate}
                  onChange={this.handleStartDateChange}
                />
                {" "}
                End Date
              {" "}
                <DatePicker
                  id="endDate"
                  selected={this.state.endDate}
                  onChange={this.handleEndDateChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox id="forks_selected"  onChange={this.handleCheck} checked={this.state.forks_selected} >Forks</Checkbox>

              </td>
              <td>
                Min <NumericInput min={0} id="forks_min" onChange={this.handleForksMinChange} value={this.state.forks_min}/>
                {" "}
                Max <NumericInput min={0} id="forks_max" onChange={this.handleForksMaxChange} value={this.state.forks_max} />
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox id="stars_selected"  onChange={this.handleCheck} checked={this.state.stars_selected} >Stars</Checkbox>
              </td>
              <td>
                Min <NumericInput min={0} id="stars_min" onChange={this.handleStarsMinChange} value={this.state.stars_min}/>
                {" "}
                Max <NumericInput min={0} id="stars_max" onChange={this.handleStarsMaxChange} value={this.state.stars_max}/>
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox id="open_issues_selected"  onChange={this.handleCheck} checked={this.state.open_issues_selected}>Open Issues</Checkbox>
              </td>
              <td>
                Min <NumericInput min={0} id="open_issues_min" onChange={this.handleOpenIssuesMinChange} value={this.state.open_issues_min} />
                Max <NumericInput min={0} id="open_issues_max" onChange={this.handleOpenIssuesMaxChange} value={this.state.open_issues_max}/>
              </td>
            </tr>
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button onClick={()=>{this.handleSubmit()}}>Apply Changes</Button>
          <Button onClick={()=>{this.handleReset()}}>Reset</Button>
        </ButtonToolbar>
      </div>
    )
  }}