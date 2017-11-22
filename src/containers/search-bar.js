import React, { Component } from 'react';
import { DropdownButton, SplitButton, MenuItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// IMPORT OTHER FILES
import testAPI from '../actions/index';
import ISOCountryCodes from '../components/wunder-to-iso';
import CountryNames from '../components/iso-country-names';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCity: '',
            countries: CountryNames,
            activeCountry: 'United States',
            activeISO: 'US',
            activeWunderCode: 'US',
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            activeMonth: 'Choose a Month...',
            activeNumber: 0,
            states: ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"],
            activeState: 'Choose a State...',
        }
    }
    changeActive(selectedItem, typeItem, number) {
        if (typeItem === "months") {
            if(number <= 9){
                number = `0${number}`
            }
            this.setState({
                activeMonth: selectedItem,
                activeNumber: number
            })
        }
        if (typeItem === "states") {
            this.setState({
                activeState: selectedItem,
            })
        }
        if (typeItem === "countries") {
            var codes = this.getWunderCode(selectedItem);

            this.setState({
                activeCountry: selectedItem,
                activeISO: codes.activeISO,
                activeWunderCode: codes.activeWunderCode
            })
        }
        
    }
    getWunderCode(singleCountryName){
       var ISOcountryObj = CountryNames.find(function(singleCountry){
           return singleCountry.name === singleCountryName
        })
        var ISOCountryCode = ISOcountryObj.code
        console.log(ISOcountryObj)
        console.log(ISOCountryCodes)
        console.log(ISOCountryCode)
        var wunderCode = ISOCountryCodes[ISOCountryCode]
        
        console.log(wunderCode)
        return {
            activeISO: ISOCountryCode,
            activeWunderCode: wunderCode,
        }
    }
    enterNewCity(e) {
        // console.log(e.target.value)
        this.setState({
            currentCity: e.target.value
        })
    }
    submitCityAndMonth(e) {
        e.preventDefault();
        // console.log(`Current State is: ${this.state.currentCity} ${this.state.activeState} ${this.state.activeNumber}`)
        console.log(this.state.currentCity, this.state.activeState, this.state.activeCountry, this.state.activeWunderCode, this.state.activeNumber, this.state.activeMonth)
        this.props.fetchWeather(this.state.currentCity, this.state.activeState, this.state.activeCountry, this.state.activeWunderCode, this.state.activeNumber, this.state.activeMonth)
    }
  

    render() {
        const createDropDown = (arrItems, type) => {
            // console.log(arrItems)
            var count = 0;
            var newArray = arrItems.map((item) => {
                count += 1;
                // console.log(item, count)
                var number = count
                return <MenuItem key={item}  onSelect={() => this.changeActive(item, type, number)}>{item}</MenuItem>
            })
            return newArray
        }
        const selectivelyRenderStates = () => {
            if(this.state.activeCountry === "United States"){
               return <DropdownButton className="search-element" title={this.state.activeState} id='months-dropdown-menu'>{createDropDown(this.state.states, 'states')}</DropdownButton>
            //    return <div>This should be the state dropdown</div>
        }
    }

        return (
            <div id="search-bar">
                <form onSubmit={(event) => this.submitCityAndMonth(event)}>
                    <DropdownButton className="search-element" title={this.state.activeCountry} id='months-dropdown-menu'>{createDropDown(this.state.countries.map((countryObj) => 
                    countryObj.name), 'countries')}</DropdownButton>
                    {selectivelyRenderStates()}
                    <input className="search-element" placeholder="City..." value={this.state.currentCity} onChange={(event) => { this.enterNewCity(event) }} />
                    <DropdownButton className="search-element" title={this.state.activeMonth} id='months-dropdown-menu'>{createDropDown(this.state.months, 'months')}</DropdownButton>
                    <button className="search-button" type="submit" >Search</button>
                </form>
            </div>
        )
    }

}
function mapDispatchtoProps(dispatch) {
    return (
        bindActionCreators({ fetchWeather }, dispatch)
    )
}
export default connect(null, mapDispatchtoProps)(SearchBar);
