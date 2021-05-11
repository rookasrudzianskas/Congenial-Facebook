import React from 'react';
import "./styles/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />

            <MessageSender />
        {/*    Message Sender   */}
            <Post />
        </div>
    );
};

export default Feed;
