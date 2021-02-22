import React, { useState } from 'react';
import EmailItem from './EmailItem';
import UpIcon from '../assets/icons/UpIcon';
import '../assets/css/EmailList.css';

const EmailList = ({ emails, searchDate }) => {

    const [sortPreference, setSortPreference] = useState("date");

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const fromDate = new Date(searchDate.split("-")[0]);
    const toDate = new Date(searchDate.split("-")[1]);

    const sortList = (param) => {
        setSortPreference(param);
    };

    const renderedEmailList = emails.filter((email) => {
        var emailDate = new Date(email.date);
        if (fromDate <= emailDate && emailDate <= toDate) {
            return true;
        }
        else {
            return false;
        }
    }).map((email) => {
        var emailDate = new Date(email.date);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        var currentDate = yyyy + "/" + mm + "/" + dd;
        var date = email.date.split(" ")[0];
        if (date === currentDate) {
            date = email.date.split(" ")[1];
            date = date.substr(0, date.lastIndexOf(':'));
        }
        else if (date.split("/")[1] === mm) {
            date = months[emailDate.getMonth()] + " " + emailDate.getDate();
        }
        return (<EmailItem key={email.id} email={email} date={date} sortPreference={sortPreference} />);
    });



    return (

        <table className="ui fixed table">
            <thead>
                <tr>
                    <th className="email-cell-title three wide" onClick={() => sortList("from")}>From</th>
                    <th className="email-cell-title four wide" onClick={() => sortList("to")}>To</th>
                    <th className="email-cell-title six wide" onClick={() => sortList("subject")}>Subject</th>
                    <th className="email-cell-title three wide" onClick={() => sortList("date")}>Date <div className="up-icon"><UpIcon /> </div></th>
                </tr>
            </thead>
            <tbody>
                {renderedEmailList}
            </tbody>
        </table>
    );
};

export default EmailList;