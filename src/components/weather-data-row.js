import React, { Component } from 'react';
import WeatherData from '../components/weather-data';
import { Button, Panel, Collapse } from 'react-bootstrap';
import WeatherGraph from '../components/weather-graph';
import WeatherSnowRainGraph from '../components/weather-snow-rain-graph.js'


class WeatherDataRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            detailed: false
        }
    }
    toggle() {
        console.log(this.state.detailed)
        this.setState({detailed: !this.state.detailed})
    }
    render(){
        var city = this.props.city
        return(
            <div className={city.myData.row % 2 ? 'white' : 'grey'}>
                
                    <div className='table-row pointer' onClick={() => this.toggle()}>
                
                
                        <WeatherData key={city.myData.city_name} data={city.myData.city_name} />
                        <WeatherData key={city.myData.country_name} data={city.myData.country_name} />
                        <WeatherData key={city.myData.month_name} data={city.myData.month_name} />
                        <WeatherData key={city.temp_high.avg.F} data={city.temp_high.avg.F} />
                        <WeatherData key={city.temp_low.avg.F} data={city.temp_low.avg.F} />
                        <WeatherData key={city.airport_code} data={parseInt(city.chance_of.chanceofsnowday.percentage) + parseInt(city.chance_of.chanceofrainday.percentage)} />
                        
                            <div className="pointer delete-city-button" 
                                onClick={(e) => this.props.closeTableRow(city.myData.city_name, city.myData.month_name)}>X
                            </div>
                        
                </div>
                <Collapse in={this.state.detailed}>
                            <div className="collapse-info">
                                <div className="flex-it">
                                <WeatherGraph  data={city} currentID ={city.myData.city_name + city.myData.month_name}/>
                                <WeatherSnowRainGraph data={city} currentID ={city.myData.city_name + city.myData.month_name + city.chance_of.chanceofsnowday.percentage}/>
                                </div>
                            </div>
                </Collapse>
             </div>
                    
                    
                
           
            
        )
    }
}

export default WeatherDataRow;


//  <p>{`${city.myData.city_name} in ${city.myData.month_name} is often ${city.cloud_cover.cond} with a ${parseInt(city.chance_of.chanceofsnowday.percentage) + parseInt(city.chance_of.chanceofrainday.percentage)}% of Rain or Snow.`}
//                                 </p>
//                                 <table>
//                                     <thead>
//                                         <tr>
//                                             <th>Temp Highs</th>
//                                             <th>Temp Lows</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>High {city.temp_high.max.F}</td>
//                                             <td>High {city.temp_low.max.F}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Avg {city.temp_high.avg.F}</td>
//                                             <td>Avg {city.temp_low.avg.F}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Low {city.temp_high.min.F}</td>
//                                             <td>Low {city.temp_low.min.F}</td>
//                                         </tr>
//                                     </tbody>
//                                 </table> 