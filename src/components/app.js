import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';
import Map from '../containers/google-map'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Map />
        <WeatherList />
        
      </div>
    );
  }
}
