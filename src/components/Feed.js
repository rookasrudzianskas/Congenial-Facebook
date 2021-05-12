import React, {useEffect, useState} from 'react';
import "./styles/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";


const Feed = () => {
    // to store the posts from the firebase
    const [posts, setPosts] = useState([]);
    console.log(posts)

    useEffect(() => {
    //    running code once
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // we setPOsts with going per all id's and setting the object, to the object array
            setPosts(snapshot.docs.map(doc => ({
                // this is the id auto generated from the firebase
                id: doc.id,
                // we return all the data, which is the data in the id, name, image and so on
                data: doc.data()
            })));
        })
    }, []);

    return (
        <div className="feed">
            <StoryReel />

            <MessageSender />
        {/*    Message Sender   */}
            {posts.map((post) => (
                <Post key={post.data.id} profilePic={post.data.profilePic} message={post.data.message} timestamp={post.data.timestamp} username={post.data.username} image={post.data.image}/>
            ))}

        </div>
    );
};

export default Feed;
