import React from 'react';
import AttatchmentIcon from '../assets/icons/AttatchmentIcon';
import '../assets/css/EmailItem.css';

const EmailItem = ({ email, date, sortPreference}) => {
    
    return (
        <tr className="email-cell-row">
            <td>
                <div className={`email-cell-text ${sortPreference == "from" ? "sort-selected": ""}`}>{email.from}</div>
            </td>
            <td>
                <div className="ui grid">
                    <div className={`email-cell-text twelve wide column ${sortPreference == "to" ? "sort-selected": ""}`}>{email.to}</div>
                    <div className="four wide column">{email.cc ? <div className="ui mini grey label">+{email.cc.length}</div> : ""}</div>
                </div>
            </td>
            <td>
                <div className="ui grid">
                    <div className={`email-cell-text fourteen wide column ${sortPreference == "subject" ? "sort-selected": ""}`}>{email.subject}</div>
                    <div className="two wide column">{email.attatchment ? <AttatchmentIcon /> : ""}</div>
                </div>
            </td>
            <td>
                <div className={`email-cell-text email-date ${sortPreference == "date" ? "sort-selected": ""}`}>{date}</div>
            </td>
        </tr>
    );
};

export default EmailItem;