import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Grid,Col,Row} from 'react-bootstrap';
import AddUser from './adduser/adduser.js';
import UserListItem from './userlistitem/userlistitem.js';
import Profile from './profile/profile.js';
import './home.css';




export default class Home extends Component {


render(){
    const listItems = this.props.users ? this.props.users.map((data, index) => <UserListItem data={data} key={index} selectUser={this.props.selectUser} activeUser={this.props.activeUser}/>) : null;
    return (
        <div className="Home">
            <Grid className="Home-Grid">
                <Row>
                    <AddUser error={this.props.error} addUser={this.props.addUser} loading={this.props.loading} id_user={this.props.id_user} />
                </Row>
                <Row className="Home-Row">
                    <Col xs={6} md={4} className="Home-Col">
                        <ul className="Home-ul">
                            {listItems}
                        </ul>
                    </Col>
                    <Col xs={6} md={8} className="Home-Col">
                        {this.props.activeUser ? <Profile users={this.props.users} activeUser={this.props.activeUser} /> : null}
                    </Col>
                </Row>
            </Grid>

        </div>
    )
}
}
