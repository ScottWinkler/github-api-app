import React, {Component} from 'react';
import './profile.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import RepoModal from './repomodal/repomodal.js';
import FollowerModal from './followermodal/followermodal.js';
import { Button, ButtonGroup, Image} from 'react-bootstrap';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showRepoModal: false,
            showFollowerModal:false
         }
    }
    render() {
        return (
            <div className="Profile">
            <Image src={this.props.activeUser.profile.avatar_url} alt="avatar pic" />
            <h2 className="Profile-Title">{this.props.activeUser.profile.login}</h2>
            <ButtonGroup>
                <Button bsStyle="primary" onClick={()=>{this.setState({showFollowerModal:true})}}>View Followers</Button>
                <Button bsStyle="info" onClick={()=>{this.setState({showRepoModal:true})}}>View Repos</Button>
            </ButtonGroup>
            <RepoModal {...this.props} show={this.state.showRepoModal}  close={() => { this.setState({ showRepoModal: false }) }} />
            <FollowerModal activeUser={this.props.activeUser}  show={this.state.showFollowerModal}  close={() => { this.setState({ showFollowerModal: false }) }} />
            </div>
        )}}