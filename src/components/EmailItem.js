import React from 'react';
import AttatchmentIcon from '../assets/icons/AttatchmentIcon';
import '../assets/css/EmailItem.css';

const EmailItem = ({ email }) => {
    return (
        <tr>
            <td>{email.from}</td>
            <td>
                {email.to}
                {email.cc ? <div className="ui mini grey label">+{email.cc.length}</div> : ""}
            </td>
            <td>
                <div className="ui grid">
                <div className="fourteen wide column">{email.subject}</div>
                <div className="two wide column">{email.attatchment ? <div className="attachment"><AttatchmentIcon /></div> : ""}</div>
                </div>
            </td>
            <td>{email.date}</td>
        </tr>
    );
};

export default EmailItem;