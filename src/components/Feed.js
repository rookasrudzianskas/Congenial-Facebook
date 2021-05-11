import React from 'react';
import "./styles/Feed.css";
import StoryReel from "./StoryReel";

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />

            <MessageSender />
        {/*    Message Sender   */}

        </div>
    );
};

export default Feed;
