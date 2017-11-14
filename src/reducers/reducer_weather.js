import { FETCH_WEATHER, DELETE_CITY, SORT_BY_MONTH, SORT_BY_CITY, SORT_TEMP_HIGHS, SORT_TEMP_LOWS, SORT_RAIN_SNOW } from '../actions/index'

// console.log(DELETE_CITY, FETCH_WEATHER)
var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

function sortBy(arr, sortingParameter) {
    var newArr = arr.slice();
    var sortingKey = sortingParameter + '_sorted'
    console.log(newArr)
    return newArr.sort(function (a, b) {
        a.myData[sortingKey] = true;
        b.myData[sortingKey] = true;
        if (sortingParameter === 'month_name') {
            return months.indexOf(a.myData[sortingParameter])
                - months.indexOf(b.myData[sortingParameter]);
        }
        if(sortingParameter === 'temp_high' || sortingParameter === 'temp_low'){
            return a[sortingParameter].avg.F > b[sortingParameter].avg.F
        }
        if(sortingParameter === 'chance_of'){
            return ((parseInt(a.chance_of.chanceofrainday.percentage) + parseInt(a.chance_of.chanceofsnowday.percentage)) > (parseInt(b.chance_of.chanceofrainday.percentage) + parseInt(b.chance_of.chanceofsnowday.percentage)))   
        }
        return a.myData[sortingParameter] > b.myData[sortingParameter]

    });
}

function inverseSortBy(arr, sortingParameter) {
    var newArr = arr.slice();
    var sortingKey = sortingParameter + '_sorted'
    return newArr.sort(function (a, b) {
        a.myData[sortingKey] = false;
        b.myData[sortingKey] = false;
        if (sortingParameter === 'month_name') {
            return months.indexOf(b.myData[sortingParameter])
                - months.indexOf(a.myData[sortingParameter]);
        }
        if(sortingParameter === 'temp_high' || sortingParameter === 'temp_low'){
            return a[sortingParameter].avg.F < b[sortingParameter].avg.F
        }
        if(sortingParameter === 'chance_of'){
            return ((parseInt(a.chance_of.chanceofrainday.percentage) + parseInt(a.chance_of.chanceofsnowday.percentage)) < (parseInt(b.chance_of.chanceofrainday.percentage) + parseInt(b.chance_of.chanceofsnowday.percentage)))   
        }
        return b.myData[sortingParameter] > a.myData[sortingParameter]
    });
}
export default function (state = [], action) {
    console.log('Action is: ', action)
    var newState = state.slice()
    switch (action.type) {
        case FETCH_WEATHER:
            var isDuplicate = false;
            for(var i = 0; i < state.length; i++){
                if (state[i].myData.city_name === action.meta.city_name && state[i].myData.month_name === action.meta.month_name) {
                    console.log('I escaped')
                    isDuplicate = true
                }
            }
            console.log(isDuplicate)
            if (!isDuplicate) {
                // console.log()
                action.payload.data.trip.myData = {};
                action.payload.data.trip.myData.city_name = action.meta.city_name
                action.payload.data.trip.myData.country_name = action.meta.country_name
                action.payload.data.trip.myData.month_name = action.meta.month_name
                return state.concat([action.payload.data.trip])
            }
            return state

        case DELETE_CITY:
            newState = state.filter((eachObj) => {
                console.log(eachObj.myData.city_name)
                return eachObj.myData.city_name !== action.payload.selectedCity || eachObj.myData.month_name !== action.payload.selectedMonth
            })
            return newState
        case SORT_BY_MONTH:
            console.log(state)
            if (newState[0].myData.month_name_sorted) {
                console.log("The state is Already Sorted!")
                return inverseSortBy(newState, 'month_name')
            }
            return sortBy(newState, 'month_name');
        case SORT_BY_CITY:
            console.log(state)
            if (newState[0].myData.city_name_sorted) {
                return inverseSortBy(newState, 'city_name')
            }
            return sortBy(newState, 'city_name');
        case SORT_TEMP_HIGHS:
            if (newState[0].myData.temp_high_sorted) {
                return inverseSortBy(newState, 'temp_high')
            }
            return sortBy(newState, 'temp_high')
        case SORT_TEMP_LOWS:
            if (newState[0].myData.temp_low_sorted) {
                return inverseSortBy(newState, 'temp_low')
            }
        return sortBy(newState, 'temp_low')
        case SORT_RAIN_SNOW:
            if (newState[0].myData.chance_of_sorted) {
                return inverseSortBy(newState, 'chance_of')
            }
            return sortBy(newState, 'chance_of')
    
    }

    // console.log('Action is: ', action)
    return state
}