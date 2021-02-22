import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'
import EmailList from './EmailList';
import EmailData from '../assets/data/EmailData.json';
import Logo from '../assets/images/logo.png';

import '../assets/css/App.css';


const App = () => {
    const emailListData = EmailData.emails;
    const [emails, setEmails] = useState([]);
    const [searchDate, setSearchDate] = useState("2020/1/1 - 2021/8/9");

    useEffect(() => {
        const fromDate = new Date(searchDate.split("-")[0]);
        const toDate = new Date(searchDate.split("-")[1]);

        let selectedEmailList = emailListData.filter((email) => {
            var emailDate = new Date(email.date);
            if (fromDate <= emailDate && emailDate <= toDate) {
                return true;
            }
            else {
                return false;
            }
        }).map((email) => { return email });
        setEmails(selectedEmailList);

    }, [emailListData, searchDate]);

    return (
        <div className="ui container">

            <SearchBar setSearchDate={setSearchDate} />
            <h3 className="ui grey header">Results: {emails.length} mail(s)</h3>
            {emails.length > 0
                ? <div><EmailList emails={emails} searchDate={searchDate} /></div>
                : <div className="logo">
                    <div className="ui divider">
                    </div> <img className="logo-image" alt="logo" src={Logo}></img>
                </div>
            }
        </div>
    );
};

export default App;