import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteCity } from '../actions/index';

import WeatherData from '../components/weather-data'


class WeatherList extends Component {
    constructor(props){
        super(props);
        // this.closeTableRow = this.closeTableRow.bind(this);
    }

    closeTableRow(city, month){
        console.log("I'm trying to close this row")
        this.props.deleteCity(city, month)
    };
    renderData(city) {
        return (
            <tr key={city.city_name + city.month_name} >
                <td><WeatherData key={city.city_name} data={city.city_name} /></td>
                <td><WeatherData key={city.month_name} data={city.month_name} /></td>
                <td><WeatherData key={city.airport_code} data={city.temp_high.avg.F} connector ="/" data2 ={city.temp_low.avg.F} /></td>
                <td><WeatherData key={city.airport_code} data={parseInt(city.chance_of.chanceofsnowday.percentage) + parseInt(city.chance_of.chanceofrainday.percentage)} /></td>
                <td><button 
                        onClick={(e) => this.closeTableRow(city.city_name, city.month_name)}>X
                    </button>
                </td>
            </tr>
        )
    }
    render() {
        // console.log(this.props.weather)
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Month</th>
                        <th>Avg Temps (F)</th>
                        <th>Likelyhood of Rain or Snow</th>
                        {/* <th><button onClick={() => this.closeTableRow('city', 'month')}>X</button></th> */}
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map((item) => this.renderData(item))}
                </tbody>
            </table>
            // <div>{this.props.weather.map(this.renderData)}</div>
        )
    }
}

function mapStateToProps({ weather }) {
    return {
        weather
    }
}

function mapDispatchtoProps(dispatch){
    return (
        bindActionCreators({ deleteCity }, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchtoProps)(WeatherList);
// export default connect(null, mapDispatchtoProps)(SearchBar);

