import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';





function Feed() {
    const [Posts, setPosts] = useState([]);

    useEffect(() => { 
        db.collection('Posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapchat => 
            setPosts(snapchat.docs.map(doc => ({id: doc.id, data:doc.data()})))
        ))
    }, [])

     
        
    
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            
            {Posts.map((post) => (
              <Post
                key={post.id}
                profilePic={post.data.profilePic}
                message= {post.data.message}
                timestamp= {post.data.timestamp}
                username= {post.data.username}
                image= {post.data.image}


              />

            ))}
            
        </div>
    )
}

export default Feed;
