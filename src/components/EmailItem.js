import React from 'react';
import AttatchmentIcon from '../assets/icons/AttatchmentIcon';
import '../assets/css/EmailItem.css';

const EmailItem = ({ email, date, sortPreference, isDesktop }) => {

    if (isDesktop) {
        return (
            <tr className="email-cell-row">
                <td>
                    <div className={`email-cell-text ${sortPreference === "from" ? "sort-selected" : ""}`}>{email.from}</div>
                </td>
                <td>
                    <div className="ui grid">
                        <div className={`email-cell-text twelve wide column ${sortPreference === "to" ? "sort-selected" : ""}`}>{email.to}</div>
                        <div className="four wide column">{email.cc ? <div className="ui mini grey label">+{email.cc.length}</div> : ""}</div>
                    </div>
                </td>
                <td>
                    <div className="ui grid">
                        <div className={`email-cell-text fourteen wide column ${sortPreference === "subject" ? "sort-selected" : ""}`}>{email.subject}</div>
                        <div className="two wide column">{email.attatchment ? <AttatchmentIcon /> : ""}</div>
                    </div>
                </td>
                <td>
                    <div className={`email-cell-text email-date ${sortPreference === "date" ? "sort-selected" : ""}`}>{date}</div>
                </td>
            </tr>
        );
    }
    else {
        return (
            <tr className="email-cell-row">
                <td>
                    <div className="ui grid">
                        <div className={`email-cell-text ten wide column ${sortPreference === "from" ? "sort-selected" : ""}`}>{email.from}</div>
                        <div className="six wide column">
                            <div className="ui grid">
                                <div className="three wide column">{email.attatchment ? <AttatchmentIcon /> : ""}</div>
                                <div className={`thirteen wide column email-cell-text email-date ${sortPreference === "date" ? "sort-selected" : ""}`}>{date}</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="ui grid">
                        <div className={`email-cell-text fourteen wide column ${sortPreference === "to" ? "sort-selected" : ""}`}>{email.to}</div>
                        <div className="two wide column">{email.cc ? <div className="ui mini grey label">+{email.cc.length}</div> : ""}</div>
                    </div>
                </td>
                <td>
                    <div className={`email-cell-text ${sortPreference === "subject" ? "sort-selected" : ""}`}>{email.subject}</div>
                </td>
            </tr>);
    }
};

export default EmailItem;