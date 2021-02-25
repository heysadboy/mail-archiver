import React, { useRef, useState } from 'react';
import AttatchmentIcon from '../assets/icons/AttatchmentIcon';
import ArrowIcon from '../assets/icons/ArrowIcon';
import MailIcon from '../assets/icons/MailIcon';
import '../assets/css/EmailItem.css';

const EmailItem = ({ email, date, sortPreference, isDesktop, expandedWidth }) => {

    const ref = useRef(null);
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
                {isExpandedEmail ?
                    <tr onClick={() => displayEmail()} className="email-expanded-row">
                        <td style={{ display: 'inline-block' }} >
                            <div style={{ width: `${expandedWidth}px` }}>
                                <div className='email-subject'>{email.subject}</div>
                                <div className='email-date-expanded'>{email.date}</div>
                                <div className="ui grid">
                                    <div className="email-icon-desktop one wide column">
                                        <div className="mail-icon"><MailIcon /></div>
                                    </div>
                                    <div className="email-info-desktop fifteen wide column">
                                        <div className='email-from'>{email.from}</div>
                                        <div className='email-to'>{email.to}</div>
                                    </div>
                                </div>
                                {email.cc ? <div className='email-cc'>cc: {email.cc.join(", ")}</div> : null}
                                <div className='email-body'>{email.body}</div>
                                {email.attatchment ? <div className='email-attatchment'><AttatchmentIcon /> {email.attatchment}</div> : null}
                            </div>
                        </td>
                    </tr>
                    : <tr ref={ref} onClick={() => displayEmail()} className="email-cell-row">
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
                }

            </React.Fragment>
        );
    }
    else {
        return (
            <tr onClick={() => displayEmail()} className={`${isExpandedEmail ? "email-expanded-row" : "email-cell-row"}`}>
                {isExpandedEmail ? <td><div className="email-subject-mobile">{email.subject}</div></td> : null}
                {isExpandedEmail ? <td><div className="email-date">{email.date}</div></td> : null}
                <td>
                    <div className="ui grid" >
                        <div className="one wide column">
                            <div className="mail-icon-mobile"><MailIcon /></div>
                        </div>
                        <div className="email-info fourteen wide column">
                            <div className="ui grid" >
                                <div className={`email-from ten wide column email-cell-text-mobile ${sortPreference === "from" ? "sort-selected" : ""}`}>{email.from}</div>
                                {!isExpandedEmail
                                    ? <div className="email-from six wide column">
                                        <div className="email-date-attachment">
                                            <div className={`email-cell-text-mobile ${sortPreference === "date" ? "sort-selected" : ""}`}>
                                                {email.attatchment && !isExpandedEmail ? <AttatchmentIcon /> : ""}{date}<ArrowIcon />
                                            </div>
                                        </div>

                                    </div>
                                    : null
                                }
                            </div>
                            <div className="ui grid" >
                                <div className={`email-to thirteen wide column email-cell-text-mobile  ${sortPreference === "to" ? "sort-selected" : ""}`}>{email.to}</div>
                                <div className="email-to three wide column" >{email.cc && !isExpandedEmail ? <div className="cc-label ui mini grey label">+{email.cc.length}</div> : ""}</div>
                            </div>
                        </div>
                    </div>
                </td>
                {isExpandedEmail && email.cc ? <td><div className='email-cc-mobile'>cc: {email.cc.join(", ")}</div></td> : null}
                {!isExpandedEmail ? <td><div className={`email-subject-mobile email-cell-text ${sortPreference === "subject" ? "sort-selected" : ""}`}>{email.subject}</div></td> : null}
                {isExpandedEmail ? <td><div className='email-body-mobile'>{email.body}</div></td> : null}
                {isExpandedEmail && email.attatchment ? <td><div className='email-attatchment-mobile'><AttatchmentIcon /> {email.attatchment}</div></td> : null}

            </tr>
        );
    }
};

export default EmailItem;