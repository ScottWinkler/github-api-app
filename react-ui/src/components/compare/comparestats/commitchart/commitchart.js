import React, {Component} from 'react';
import './commitchart.css';
import {BarChart,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Bar} from 'recharts';
export default class CommitChart extends Component {

    render() {

        return (
            <div  >
                <h2 >Commits in Last Year</h2>
            <BarChart  data={this.props.commitData} width={600} height={400}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="commits" fill="#8884d8" />
            </BarChart>
            </div>
        )}}