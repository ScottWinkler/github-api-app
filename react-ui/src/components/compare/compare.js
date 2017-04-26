import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './compare.css';
import { PageHeader} from 'react-bootstrap';
import SelectTwo from './selecttwo/selecttwo.js';
import FollowerListItem from '../home/profile/followermodal/followerslist/followerslistitem/followerslistitem.js';
import CompareStats from './comparestats/comparestats.js';
export default class Compare extends Component{

    render(){
        var secondFollows= this.props.first&&this.props.second ? this.props.second.followers.map((follower)=>{return follower.login}):null;
        console.log(secondFollows);
          const listItems = this.props.first&&this.props.second ?
          this.props.first.followers
        .filter((follower)=>{
              return secondFollows.includes(follower.login);
          })
          .map((follower,index)=><FollowerListItem key={index} src={follower.avatar_url} name={follower.login}/>)
          : null;

        return(
            <div className="Compare">
         <PageHeader>Select Two Users to Compare</PageHeader>
       <SelectTwo users={this.props.users} setUser={this.props.setUser} loading={this.props.loading} />
       {this.props.first && this.props.second&&!this.props.loading?
           (
               <div>
                   <PageHeader>Comparison Metrics</PageHeader>
                    <CompareStats first={this.props.first} second={this.props.second} first_data={this.props.first_data} second_data={this.props.second_data}/>
                   <PageHeader>Followers In Common</PageHeader>
                   <div className="Compare-Friends" >
                       {listItems}
                   </div>
        
            </div>) : null}
      </div>
        )
    }
}