import React, { useState } from 'react';
import AttatchmentIcon from '../assets/icons/AttatchmentIcon';
import ArrowIcon from '../assets/icons/ArrowIcon';
import MailIcon from '../assets/icons/MailIcon';
import '../assets/css/EmailItem.css';

const EmailItem = ({ email, date, sortPreference, isDesktop }) => {
    const [isExpandedEmail, setExpandedEmail] = useState(false);

    const displayEmail = () => {

        if (isExpandedEmail) {
            setExpandedEmail(false);
        }
        else {

            setExpandedEmail(true);
        }
    }

    if (isDesktop) {
        return (
            <React.Fragment>
                <tr onClick={() => displayEmail()} className="email-cell-row">
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
                        <div className={`email-cell-text ${sortPreference === "date" ? "sort-selected" : ""}`}>{date}</div>
                    </td>

                </tr>
                {isExpandedEmail ?
                    <tr>
                        <td>
                            {email.cc ? <td><div className='email-body'>cc: {email.cc.join(", ")}</div></td> : null}
                            <td>
                                <div className='email-body'>{email.body}</div>
                            </td>
                        </td>
                    </tr>
                    : null
                }
            </React.Fragment>
        );
    }
    else {
        return (
                <tr onClick={() => displayEmail()} className="email-cell-row">
                    <td>
                        <div className="ui grid" >
                            <div className="one wide column">
                                <div className="mail-icon"><MailIcon /></div>
                            </div>
                            <div className="email-info fourteen wide column">
                                <div className="ui grid" >
                                    <div className={`email-from ten wide column email-cell-text-mobile ${sortPreference === "from" ? "sort-selected" : ""}`}>{email.from}</div>
                                    <div className="email-from six wide column">
                                        <div className="email-date-attachment">
                                            <div className={`email-cell-text-mobile ${sortPreference === "date" ? "sort-selected" : ""}`}>
                                                {email.attatchment ? <AttatchmentIcon /> : ""}{date}<ArrowIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui grid" >
                                    <div className={`email-to thirteen wide column email-cell-text-mobile  ${sortPreference === "to" ? "sort-selected" : ""}`}>{email.to}</div>
                                    <div className="email-to three wide column" >{email.cc && !isExpandedEmail ? <div className="cc-label ui mini grey label">+{email.cc.length}</div> : ""}</div>
                                </div>
                            </div>
                        </div>
                    </td>
                    {isExpandedEmail && email.cc ? <td><div className='email-cc-mobile'>cc: {email.cc.join(", ")}</div></td> : null}
                    <td>
                        <div className={`email-subject-mobile email-cell-text ${sortPreference === "subject" ? "sort-selected" : ""}`}>{email.subject}</div>

                    </td>
                    {isExpandedEmail ? <td><div className="ui divider"></div><div className='email-subject-mobile email-body'>{email.body}</div></td>: null}

                </tr>
            );
    }
};

export default EmailItem;