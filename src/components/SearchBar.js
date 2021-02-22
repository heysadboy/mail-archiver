import React, { useState } from 'react';
import CalendarIcon from '../assets/icons/CalendarIcon';
import SearchIcon from '../assets/icons/SearchIcon';

import '../assets/css/SearchBar.css';

const SearchBar = ({ setSearchDate }) => {

    const [date, setDate] = useState("2020/1/1 - 2021/8/9");

    const onSearchSubmit = (event) => {
        event.preventDefault();
        setSearchDate(date);
    };

    return (
        <form className="ui form" onSubmit={onSearchSubmit}>
            <div className="ui action left icon input">
                <i className="active icon"><CalendarIcon /></i>
                <input type="text" id="search" onChange={(event) => setDate(event.target.value)} defaultValue={date} placeholder="yyyy/mm/dd - yyyy/mm/dd" />
                <button className="ui icon button">
                    <i className="icon"><SearchIcon /></i>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;