import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'
import EmailList from './EmailList';
import EmailData from '../assets/data/EmailData.json';
import '../assets/css/App.css';

const App = () => {
    const [emailSize, setEmailSize] = useState(0);

    useEffect(() => {
        setEmailSize(EmailData.emails.length);
    }, []);

    return (
        <div className="ui main text container">
            <SearchBar />
            <h3 className="ui grey header">Result: {emailSize} mail(s)</h3>
            {emailSize > 0
                ? <div><EmailList emails={EmailData.emails} /></div>
                : <div className="ui divider"></div>
            }
        </div>
    );
};

export default App;