import React, { Component } from 'react';
import { DropdownButton, SplitButton, MenuItem } from 'react-bootstrap'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            activeMonth: 'Choose a Month...',
            currentCity: ''
        }
    }
    changeActiveMonth(selectedMonth){
        this.setState({
            activeMonth: selectedMonth
        })
    }
    enterNewCity(e){
        console.log(e.target.value)
        this.setState({
            currentCity: e.target.value
        })
    }
    submitCityAndMonth(e){
        e.preventDefault();
        
        
    }
    render() {
        const createMonths = this.state.months.map((month) => {
            return <MenuItem key={month} onSelect={()=>this.changeActiveMonth(month)}>{month}</MenuItem>
        })
        return (
            <div>
                <form onSubmit={(event) => this.submitCityAndMonth(event)}>
                    <input placeholder="City..." value={this.state.currentCity} onChange={(event)=>{this.enterNewCity(event)}}/>
                    <SplitButton title={this.state.activeMonth} id='months-dropdown-menu'>{createMonths}</SplitButton>
                    <button type="submit" >Search</button>
                </form>
            </div>
        )
    }
}

function mapDispatchtoProps(dispatch){
    return (
        bindActionCreators({fetchWeather}, dispatch)
    )
}
export default SearchBar;
