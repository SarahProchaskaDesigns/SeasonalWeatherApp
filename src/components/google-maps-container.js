import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from '../../config';

export class MapContainer extends Component {

render() {
    const style = {
        height: '400px',
        width: '100%',
        float: 'none'
      }
      console.log(this.props)
   return (
       
     <Map google={this.props.google} zoom={14} style={style}>
         <Marker onClick={this.onMarkerClick}
               name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{item.myData.city_name}</h1>
                        </div>
                    </InfoWindow>
         {/* {this.props.data.map((item) => {
            return(
                <div key={item.myData.longitude + item.myData.latitude}>
                    <Marker onClick={this.onMarkerClick}
               name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{item.myData.city_name}</h1>
                        </div>
                    </InfoWindow>
             </div>
        )
         })
         } */}
       {/* <Marker onClick={this.onMarkerClick}
               name={'Current location'} />

       <InfoWindow onClose={this.onInfoWindowClose}>
           <div>
             <h1>{this.props.data.city_name}</h1>
           </div>
       </InfoWindow> */}
     </Map>
   );
 }
}

export default GoogleApiWrapper({
 apiKey: GOOGLE_MAPS_API_KEY
})(MapContainer)