import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import { Modal, Button,  } from 'react-bootstrap';
import './followermodal.css';
import FollowersList from './followerslist/followerslist.js';

export default class FollowerModal extends Component {
    constructor(props) {
        super(props);
        this.handleSelect=this.handleSelect.bind(this);

    }

    

handleSelect(key) {
    this.setState({key});
  }
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.props.close()} bsSize="large" animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.activeUser.profile.login}'s Followers</Modal.Title>
                    </Modal.Header>
        
                        <Modal.Body  className="FollowerModal-Body">
                        <FollowersList followers={this.props.activeUser.followers} />
                        </Modal.Body>
            
                    <Modal.Footer >
                        <Button onClick={() => this.props.close()} >Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
