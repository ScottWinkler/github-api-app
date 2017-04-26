import React, {Component} from 'react';
import './codechart.css';
import {BarChart,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Bar} from 'recharts';
export default class CodeChart extends Component {

    render() {

        return (
            <div  >
                <h2 >Code Metrics</h2>
            <BarChart  data={this.props.codeData} width={600} height={400}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="fors_per_1000_tokens" fill="#8884d8" />
                <Bar dataKey="ifs_per_1000_tokens" fill="#82ca9d" />
            </BarChart>
            </div>
        )}}