import React from 'react';
import EmailItem from './EmailItem';

const EmailList = ({ emails }) => {

    const renderedEmailList = emails.map((email) => {
        return (
            <EmailItem key={email.id} email={email} />
        );
    });

    return (
        <table className="ui sortable celled table">
            <thead>
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Subject</th>
                    <th className="sorted descending">Date</th>
                </tr>
            </thead>
            <tbody>
                {renderedEmailList}
            </tbody>
        </table>
    );
};

export default EmailList;