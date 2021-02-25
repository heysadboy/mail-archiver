import React, { useRef, useEffect, useState } from 'react';
import EmailItem from './EmailItem';
import UpIcon from '../assets/icons/UpIcon';
import '../assets/css/EmailList.css';
import useWindowSize from '../hooks/useWindowSize';

const EmailList = ({ emails }) => {

    const [sortPreference, setSortPreference] = useState("date");
    const [renderedEmailList, setRenderedEmailList] = useState(null);
    const ref = useRef(null);
    const windowSize = useWindowSize();
    let isDesktop = (useWindowSize() >= 768);

    useEffect(() => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const sortList = (preference) => {
            if (preference === "from") {
                return emails.sort((email1, email2) => (email1.from > email2.from) ? 1 : -1);
            }
            else if (preference === "to") {
                return emails.sort((email1, email2) => (email1.to > email2.to) ? 1 : -1);
            }
            else if (preference === "subject") {
                return emails.sort((email1, email2) => (email1.subject > email2.subject) ? 1 : -1);
            }
            else {
                return emails.sort((email1, email2) => (new Date(email1.date) > new Date(email2.date)) ? -1 : 1);
            }
        };

        const sortedList = sortList(sortPreference);
        const renderedEmailList = sortedList.map((email) => {
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

            var expandedWidth = ref.current.offsetWidth - 20;
            return (<EmailItem key={email.id} email={email} date={date} sortPreference={sortPreference} isDesktop={isDesktop} expandedWidth={expandedWidth} />);
        });

        setRenderedEmailList(renderedEmailList);
    }, [emails, windowSize, isDesktop, sortPreference]);


    if (isDesktop) {
        return (
            <table className="ui fixed table">
                <thead>
                    <tr ref={ref}>
                        <th className={`${sortPreference === "from" ? "selected-header-text three wide" : "three wide"}`} onClick={() => setSortPreference("from")}>From <div className={`${sortPreference === "from" ? "up-icon-visible" : "up-icon-hidden"}`}><UpIcon /> </div></th>
                        <th className={`${sortPreference === "to" ? "selected-header-text four wide" : "four wide"}`} onClick={() => setSortPreference("to")}>To <div className={`${sortPreference === "to" ? "up-icon-visible" : "up-icon-hidden"}`}><UpIcon /> </div></th>
                        <th className={`${sortPreference === "subject" ? "selected-header-text six wide" : "six wide"}`} onClick={() => setSortPreference("subject")}>Subject <div className={`${sortPreference === "subject" ? "up-icon-visible" : "up-icon-hidden"}`}><UpIcon /> </div></th>
                        <th className={`${sortPreference === "date" ? "selected-header-text three wide" : "three wide"}`} onClick={() => setSortPreference("date")}>Date <div className={`${sortPreference === "date" ? "up-icon-visible" : "up-icon-hidden"}`}><UpIcon /> </div></th>
                    </tr>
                </thead>
                <tbody>
                    {renderedEmailList}
                </tbody>
            </table>
        );
    }
    else {
        return (
            <table className="ui fixed table">
                <thead>
                    <tr ref={ref}>
                        <div className="mobile-header ui grid">
                            <th className={`${sortPreference === "from" ? "selected-header-text" : ""}`} onClick={() => setSortPreference("from")}>From <div className={`${sortPreference === "from" ? "up-icon-visible" : "up-icon-hidden"}`}><UpIcon /> </div>|</th>
                            <th className={`${sortPreference === "to" ? "selected-header-text" : ""}`} onClick={() => setSortPreference("to")}>To <div className={`${sortPreference === "to" ? "up-icon-visible" : "up-icon-hidden"}`}><UpIcon /> </div>|</th>
                            <th className={`${sortPreference === "subject" ? "selected-header-text" : ""}`} onClick={() => setSortPreference("subject")}>Subject <div className={`${sortPreference === "subject" ? "up-icon-visible" : "up-icon-hidden"}`}><UpIcon /> </div>|</th>
                            <th className={`${sortPreference === "date" ? "selected-header-text" : ""}`} onClick={() => setSortPreference("date")}>Date <div className={`${sortPreference === "date" ? "up-icon-visible" : "up-icon-hidden"}`}><UpIcon /> </div></th>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    {renderedEmailList}
                </tbody>
            </table>
        );
    }
};

export default EmailList;