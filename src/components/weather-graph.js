import React, { Component } from 'react';
import Chart from 'chart.js';
// import {Line as LineChart} from 'react-chartjs'
// var LineChart = require("react-chartjs").Line;
// var number = 0; 


class WeatherGraph extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var ctx = document.getElementById(this.props.currentID);
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["High", "Average", "Low"],
                datasets: [
                    {
                    label: `Highs in ${this.props.data.myData.month_name}`,
                    data: [
                        this.props.data.temp_high.max.F, this.props.data.temp_high.avg.F,
                        this.props.data.temp_high.min.F],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                    ],
                    borderColor: [
                        'rgba(245, 88, 49, 1)'
                    ],
                    borderWidth: 1
                },
                
                {
                    label: `Lows in ${this.props.data.myData.month_name}`,
                    data: [
                        this.props.data.temp_low.max.F, 
                        this.props.data.temp_low.avg.F,
                        this.props.data.temp_low.min.F],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                    ],
                    borderColor: [
                        'rgba(50, 109, 228, 1)'
                    ],
                    borderWidth: 1
                }
            ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
    render() {
      return <canvas id={this.props.currentID} width="100" height="50" ></canvas>
    }
  }

export default WeatherGraph;



