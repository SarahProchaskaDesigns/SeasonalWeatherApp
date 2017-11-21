import React, { Component } from 'react';
import Chart from 'chart.js';

class WeatherSnowRainGraph extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var ctx = document.getElementById(this.props.currentID);
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Rain", "Snow"],
                datasets: [
                    {
                    label: `Chances of Rain or Snow (%)`,
                    data: [
                        this.props.data.chance_of.chanceofrainday.percentage, this.props.data.chance_of.chanceofsnowday.percentage
                        ],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)'
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
      return <canvas id={this.props.currentID} width="100" height="50"></canvas>
    }
  }

export default WeatherSnowRainGraph;



