import React, {Component} from 'react';
import './starchart.css';
import {BarChart,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Bar} from 'recharts';
export default class StarChart extends Component {

    render() {

        return (
            <div  className="StarChart">
                <h2 className="StarChart-Title">Top 5 Repositories By Star Count</h2>
            <BarChart width={this.props.width-40} height={Math.floor((this.props.width-40)/2)} 
            data={this.props.repos
            .sort(function(a,b){return +(a.stargazers_count < b.stargazers_count || +(a.stargazers_count===b.stargazers_count)-1)}) //sort by stargazers_count, desc
            .slice(0,5) //limit 5
            } >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="stargazers_count" fill="#8884d8" />
            </BarChart>
            </div>
        )}}