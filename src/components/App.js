import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'
import EmailList from './EmailList';
import EmailData from '../assets/data/EmailData.json';
import '../assets/css/App.css';

const App = () => {
    const [emailSize, setEmailSize] = useState(0);
    const [searchDate, setSearchDate] = useState("2020/1/1 - 2021/8/9");

    useEffect(() => {
        setEmailSize(EmailData.emails.length);
    }, []);

    return (
        <div className="ui container">
            <SearchBar searchDate={searchDate} setSearchDate={setSearchDate} />
            <h3 className="ui grey header">Results: {emailSize} mail(s)</h3>
            {emailSize > 0
                ? <div><EmailList emails={EmailData.emails} searchDate={searchDate} /></div>
                : <div className="ui divider"></div>
            }
        </div>
    );
};

export default App;