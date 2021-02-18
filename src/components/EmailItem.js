import React from 'react';

const EmailItem = ({ email }) => {
    return (
        <tr>
            <td>{email.from}</td>
            <td>{email.to}</td>
            <td>{email.subject}</td>
            <td>{email.date}</td>
        </tr>
    );
};

export default EmailItem;