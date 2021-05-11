import React from 'react';
import "./styles/MessageSender.css";
import {Avatar} from "@material-ui/core";

const MessageSender = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Done");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form action="">
                    <input className="messageSender__input" type="text" placeholder="What's on your mind?"/>
                    <input className="messageSender__" type="text" placeholder="image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">

            </div>
        </div>
    );
};

export default MessageSender;
