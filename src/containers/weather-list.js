import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { deleteCity, sortMonths, sortCity, sortTempHighs, sortTempLows, sortRainSnow } from '../actions/index';

import WeatherData from '../components/weather-data'
import WeatherDataRow from '../components/weather-data-row'


class WeatherList extends Component {
    constructor(props){
        super(props);
        this.closeTableRow = this.closeTableRow.bind(this);
    }

    closeTableRow(city, month){
        // console.log("I'm trying to close this row")
        this.props.deleteCity(city, month)
    };
    renderData(city) {
        return (
            <WeatherDataRow city={city} closeTableRow={this.closeTableRow}key={city.myData.city_name + city.myData.month_name}/>
        )
    }
    render() {
        // console.log(this.props.weather)
        return (
            <div>
                <div className="table-title">
                            <div className="pointer" onClick={() => this.props.sortCity()}>City</div>
                            <div className="pointer">Country</div>
                            <div className="pointer" onClick={() => this.props.sortMonths()}>Month</div>
                            <div className="pointer" onClick={() => this.props.sortTempHighs()}>Avg High (F)</div>
                            <div className="pointer" onClick={() => this.props.sortTempLows()}>Avg Low (F)</div>
                            <div className="pointer" onClick={() => this.props.sortRainSnow()}>Rain or Snow?</div>
                            <div>Delete</div>
                            {/* <th><button onClick={() => this.closeTableRow('city', 'month')}>X</button></th> */}
                </div> 
                
                    {this.props.weather.map((item) => this.renderData(item))}
                
            </div>
            
            
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
