import React, { useState } from 'react';
import '../assets/css/SearchBar.css';
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import CalendarIcon from '../assets/icons/CalendarIcon';
import SearchIcon from '../assets/icons/SearchIcon';

const SearchBar = () => {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    return (
        <div className="ui action left icon input">
            <i className="icon"><CalendarIcon /></i>
            <input type="text" id="search" placeholder="yyyy/mm/dd - yyyy/mm/dd" />
            <button className="ui icon button">
            <i className="icon"><SearchIcon /></i>
            </button>
        </div>
    );
};

export default SearchBar;