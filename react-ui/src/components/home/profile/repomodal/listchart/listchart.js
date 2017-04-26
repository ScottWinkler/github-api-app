import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Glyphicon,Table} from 'react-bootstrap';
import React, {Component} from 'react';
import './listchart.css';
export default class ListChart extends Component {
constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state={
        sort_by:"created_at",
        asc_desc:"desc"
}
}
    handleClick(e){
        var prev_sort_by=this.state.sort_by;
        var new_sort_by=e.target.id;
        if(prev_sort_by===new_sort_by){
            if(this.state.asc_desc==="asc"){this.setState({asc_desc:"desc"})}
            else{this.setState({asc_desc:"asc"})}
        }
        else{
            this.setState({asc_desc:"asc", sort_by:new_sort_by});
        }
    }


    render() {
        const tableItems=this.props.repos
        .filter((el)=>{
            if(this.props.filters){
            if(this.props.filters.name_selected){
               if(!el.name.match(this.props.filters.name_regex)){return false;}
            }
            if(this.props.filters.date_selected){
                var created_at = new Date(el.created_at.substring(0,10));
                if(created_at<this.props.filters.startDate){return false;}
                if(created_at>this.props.filters.endDate){return false;}
            }
             if(this.props.filters.forks_selected){
               if(this.props.filters.forks_min!==null){
                if(el.forks_count<this.props.filters.forks_min){return false;}
               }
                if(this.props.filters.forks_max!==null){
                if(el.forks_count>this.props.filters.forks_max){return false;}
               }
            }
            if(this.props.filters.stars_selected){
               if(this.props.filters.stars_min!==null){
                if(el.stargazers_count<this.props.filters.stars_min){return false;}
               }
                if(this.props.filters.forks_max!==null){
                if(el.stargazers_count>this.props.filters.stars_max){return false;}
               }
            }
             if(this.props.filters.open_issues_selected){
               if(this.props.filters.open_issues_min!==null){
                if(el.open_issues_count<this.props.filters.open_issues_min){return false;}
               }
                if(this.props.filters.open_issues_max!==null){
                if(el.open_issues_count>this.props.filters.open_issues_max){return false;}
               }
            }}
            return true;
        })
        .sort((a,b)=>{
             var sort_by=this.state.sort_by;
                if (this.state.asc_desc === "asc") {
                    if (a[sort_by] < b[sort_by]) { return -1 }
                    if (a[sort_by] > b[sort_by]) { return 1 }
                }
                else {
                    if (a[sort_by] > b[sort_by]) { return -1 }
                    if (a[sort_by] < b[sort_by]) { return 1 }
                }
            return 0;
        })
        .map((repo,index)=>
        <tr key={index}>
            <td>{repo.name}</td>
            <td>{repo.stargazers_count}</td>
            <td>{repo.forks_count}</td>
            <td>{repo.open_issues_count}</td>
            <td>{repo.created_at.substring(0,10)}</td>
        </tr>);
        const divStyle={height:this.props.height};
        return (
            <div style={divStyle} className="ListChart">
                <Table className="ListChart-Table" striped condensed hover>
                    <thead>
                        <tr>
                    <th>Name <Glyphicon glyph="sort" id="name" onClick={this.handleClick}/></th>
                    <th>Stars <Glyphicon glyph="sort" id="stargazers_count" onClick={this.handleClick}/></th>
                    <th>Forks <Glyphicon glyph="sort" id="forks_count" onClick={this.handleClick}/></th>
                    <th>Open Issues <Glyphicon glyph="sort" id="open_issues_count" onClick={this.handleClick}/></th>
                    <th>Date Created <Glyphicon glyph="sort" id="created_at" onClick={this.handleClick}/></th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableItems}
                    </tbody>
                </Table>
            
            </div>
        )}}