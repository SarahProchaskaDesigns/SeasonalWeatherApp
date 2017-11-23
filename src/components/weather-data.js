import React from 'react';

const WeatherData = (props) => {
    if(!props.unit){
        return <div className="tr-cell">{props.data}</div>
    }
    return(
        <div className="tr-cell">{`${props.data} ${props.unit}`}</div>
    )
}

export default WeatherData;