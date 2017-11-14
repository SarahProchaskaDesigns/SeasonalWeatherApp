import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteCity, sortMonths, sortCity, sortTempHighs, sortTempLows, sortRainSnow } from '../actions/index';

import WeatherData from '../components/weather-data'


class WeatherList extends Component {
    constructor(props){
        super(props);
        // this.closeTableRow = this.closeTableRow.bind(this);
    }

    closeTableRow(city, month){
        // console.log("I'm trying to close this row")
        this.props.deleteCity(city, month)
    };
    renderData(city) {
        return (
            <tr key={city.myData.city_name + city.myData.month_name} >
                <td><WeatherData key={city.myData.city_name} data={city.myData.city_name} /></td>
                <td><WeatherData key={city.myData.country_name} data={city.myData.country_name} /></td>
                <td><WeatherData key={city.myData.month_name} data={city.myData.month_name} /></td>
                <td><WeatherData key={city.temp_high.avg.F} data={city.temp_high.avg.F} /></td>
                {/* <td><WeatherData key={city.airport_code} data={city.temp_high.avg.F} connector ="/" data2 ={city.temp_low.avg.F} /></td> */}
                <td><WeatherData key={city.temp_low.avg.F} data={city.temp_low.avg.F} /></td>
                <td><WeatherData key={city.airport_code} data={parseInt(city.chance_of.chanceofsnowday.percentage) + parseInt(city.chance_of.chanceofrainday.percentage)} /></td>
                <td><button 
                        onClick={(e) => this.closeTableRow(city.myData.city_name, city.myData.month_name)}>X
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
                        <th className="pointer" onClick={() => this.props.sortCity()}>City</th>
                        <th>Country</th>
                        <th className="pointer" onClick={() => this.props.sortMonths()}>Month</th>
                        <th className="pointer" onClick={() => this.props.sortTempHighs()}>Avg High (F)</th>
                        <th className="pointer" onClick={() => this.props.sortTempLows()}>Avg Low (F)</th>
                        <th className="pointer" onClick={() => this.props.sortRainSnow()}>Rain or Snow?</th>
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
    return ( bindActionCreators({ deleteCity, sortMonths, sortCity, sortTempHighs, sortTempLows, sortRainSnow }, dispatch))   
}

export default connect(mapStateToProps, mapDispatchtoProps)(WeatherList);
// export default connect(null, mapDispatchtoProps)(SearchBar);

// {
    //     deleteCity: bindActionCreators({ deleteCity }, dispatch),
    //     sortMonths: bindActionCreators({ sortMonths }, dispatch)
    // }   
