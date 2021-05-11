import React from 'react';
import "./styles/MessageSender.css";
import {Avatar} from "@material-ui/core";

const MessageSender = () => {
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
            </div>

            <div className="messageSender__bottom">

            </div>
        </div>
    );
};

export default MessageSender;
