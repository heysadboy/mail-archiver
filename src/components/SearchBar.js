import React from 'react';
import CalendarIcon from '../assets/icons/CalendarIcon';
import SearchIcon from '../assets/icons/SearchIcon';

import '../assets/css/SearchBar.css';

const SearchBar = ({searchDate, setSearchDate}) => {
    
    return (
        <div className="ui action left icon input">
            <i className="icon"><CalendarIcon /></i>
            <input type="text" id="search" defaultValue={searchDate} placeholder="yyyy/mm/dd - yyyy/mm/dd" />
            <button className="ui icon button">
                <i className="icon"><SearchIcon /></i>
            </button>
        </div>
    );
};

export default SearchBar;