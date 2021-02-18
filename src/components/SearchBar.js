import React, { useState } from 'react';
import '../assets/css/SearchBar.css'
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import CalendarIcon from '../assets/icons/CalendarIcon';
import SearchIcon from '../assets/icons/SearchIcon';

const SearchBar = () => {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    return (
        <div>
            <div className="ui huge action left icon input">
                <i className="icon active"><CalendarIcon /></i>
                <input type="text" id="search" />
                <button className="huge ui icon button">
                    <SearchIcon />
                </button>
            </div>


        </div>
    );
};

export default SearchBar;