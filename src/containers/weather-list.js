import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class WeatherList extends Component{
    renderData(city){
        return city.title
    }
    render(){
        console.log(this.props.weather)
        return(
            <div>{this.props.weather.map(this.renderData)}</div>
        )
    } 
}

function mapStateToProps({ weather }){
    return{
        weather
    }
}

export default connect(mapStateToProps)(WeatherList);