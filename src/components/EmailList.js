import React from 'react';
import EmailItem from './EmailItem';
import AttatchmentIcon from '../assets/icons/AttatchmentIcon';

const EmailList = ({ emails }) => {

    const renderedEmailList = emails.map((email) => {
        return (
            <EmailItem key={email.id} email={email} />
        );
    });

    return (
        <table className="ui fixed table">
            <thead>
                <tr>
                    <th className="three wide">From</th>
                    <th className="three wide">To</th>
                    <th className="eight wide">Subject</th>
                    <th className="two wide">Date</th>
                </tr>
            </thead>
            <tbody>
                {renderedEmailList}
            </tbody>
        </table>
    );
};

export default EmailList;