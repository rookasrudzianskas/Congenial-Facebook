import React from 'react';
import "./styles/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />

            <MessageSender />
        {/*    Message Sender   */}
            <Post
                key=""
                profilePic="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg"
                message="Something cool is coming up 🚀"
                timestamp=""
                username="Rookas Rudzianskas"
                image="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752"
            />

            <Post
                key=""
                profilePic="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg"
                message="Something cool is coming up 🚀"
                timestamp=""
                username="Rookas Rudzianskas"
                image="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752"
            />

            <Post
                key=""
                profilePic="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg"
                message="Something cool is coming up 🚀"
                timestamp=""
                username="Rookas Rudzianskas"
                image="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752"
            />

            <Post
                key=""
                profilePic="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg"
                message="Something cool is coming up 🚀"
                timestamp=""
                username="Rookas Rudzianskas"
                image="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752"
            />

            <Post
                key=""
                profilePic="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg"
                message="Something cool is coming up 🚀"
                timestamp=""
                username="Rookas Rudzianskas"
                image="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752"
            />

        </div>
    );
};

export default Feed;
