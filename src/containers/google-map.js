import React, { Component } from 'react';
import { connect } from 'react-redux';
// import MapContainer from '../components/google-maps-container';
// import GoogleMapMarker from '../components/google-map-marker'

const ARC_DE_TRIOMPHE_POSITION = {
    lat: 48.873947,
    lng: 2.295038
  };
  
  const EIFFEL_TOWER_POSITION = {
    lat: 48.858608,
    lng: 2.294471
  };

  const DEFAULT_POSITION = {
    lat: 25.8136,
    lng: 8.1339
  };
  const EUROPE_POSITION = {
      lat: 46.6365,
      lng: 14.3122
  }
  const UNITED_STATES_POSITION = {
    lat: 37.7098,
    lng: -95.6975
}
const ASIA_POSITION = {
    lat: 25.9288,
    lng: 92.9476
}

const testArr = [{
    lat: 25.9288,
    lng: 92.9476},
    {
        lat: 37.7098,
        lng: -95.6975
    },
    {
        lat: 46.6365,
        lng: 14.3122
    }
]
var allMarkers = [];
//   var myMap = this.map = new google.maps.Map(this.refs.map, {
//         center: EIFFEL_TOWER_POSITION,
//         zoom: 16
//       });
  class Map extends Component {
    constructor(props) {
      super(props);
    //   this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
    // this.panToEurope = this.panToEurope.bind(this)
    // this.panToLocation = this.panToLocation.bind(this)
    }
    
    componentDidMount() {
        this.googleMap = new google.maps.Map(this.refs.googleMap, {
            center: DEFAULT_POSITION,
            zoom: 1
          });
    }
    componentDidUpdate(){
        this.clearMarkers()
        this.props.weather.map((indivCity) => {
            console.log('The individual city is printing: ', indivCity)
            var eachValue = this.renderMarkers(indivCity)
            // console.log(eachValue)
            allMarkers.push(eachValue)
            console.log(allMarkers.length)
            console.log(allMarkers)
            return allMarkers
        })
        // testArr.map((obj) =>{
            
        //     return this.renderMarkersTest(obj)
        // })
    }
    clearMarkers() {
        for (var i = 0; i < allMarkers.length; i++) {
         console.log(allMarkers)
          allMarkers[i].setMap(null);
        }
        allMarkers = [];
    }
    // panToEurope() {
    //   console.log(this)
    //   this.googleMap.setZoom(3)
    //   this.googleMap.panTo(EUROPE_POSITION)
    // }
    panToLocation(location, num) {
        console.log(this)
        this.googleMap.setZoom(num)
        this.googleMap.panTo(location)
      }
    
    renderMarkers(city) {
        console.log('These are the cities that renderMarkers is using: ', city)
        console.log(this.googleMap)
        // var uluru = {lat: -25.363, lng: 131.044};
        
        var position = {
            lat: parseFloat(city.myData.latitude),
            lng: parseFloat(city.myData.longitude)
        }
        var contentString = `${city.myData.city_name} in ${city.myData.month_name} is often ${city.cloud_cover.cond} with a ${parseInt(city.chance_of.chanceofsnowday.percentage) + parseInt(city.chance_of.chanceofrainday.percentage)}% chance of Rain or Snow.`

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

    

        var marker = new google.maps.Marker({
          position: position,
          map: this.googleMap,
          title: city.myData.city_name
        });
        
        // var i = 0;
        // function random(){
        //     window.markers[i].setMap(null);
        // }
        // i += 1
        // random()

        marker.addListener('click', function() {
          infowindow.open(this.googleMap, marker);
        });
        
        return marker
        // allMarkers.push(marker)
      }

    //   renderMarkersTest(city) {
    //     var position = city;

    //     var marker = new google.maps.Marker({
    //       position: position,
    //       map: this.googleMap,
    //       title: "Test"
    //     });
    //   }

    //   deleteLastPin(){
    //       testArr.pop()
    //       console.log(testArr)
    //       return testArr
    //   }

    render() {
      const mapStyle = {
        width: 500,
        height: 300,
        border: '1px solid black'
      };
      
      return (
          <div>
        <div id="maping-buttons">
            <button onClick={ () => this.panToLocation(DEFAULT_POSITION, 1)}>Go to World View</button>
          <button onClick={ () => this.panToLocation(EUROPE_POSITION, 4)}>Go to Europe</button>
          <button onClick={ () => this.panToLocation(UNITED_STATES_POSITION, 4)}>Go US</button>
          <button onClick={ () => this.panToLocation(ASIA_POSITION, 3)}>Go Asia</button>
          </div>
          <div ref="googleMap" id="map">I should be a map!</div>
        </div>
      );
    }
  }

  function mapStateToProps({ weather }) {
    return {
        weather
    }
}

export default connect(mapStateToProps)(Map);
  


// export default Map;