import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://images.pexels.com/photos/309724/pexels-photo-309724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://cdn.pixabay.com/photo/2017/01/31/22/32/boy-2027768__340.png"
                title="Marc Fill"
            />

            <Story 
                image="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://cdn.pixabay.com/photo/2017/01/31/08/46/anthropomorphized-animals-2023331__340.png"
                title="Joe Dett"
            />

            <Story 
                image="https://images.pexels.com/photos/2954199/pexels-photo-2954199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://cdn.pixabay.com/photo/2016/04/25/14/15/man-1352025__340.png"
                title="Bob Grill"
            />

            <Story 
                image="https://images.pexels.com/photos/1928151/pexels-photo-1928151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://cdn.pixabay.com/photo/2013/07/13/09/40/puss-in-boots-155895__340.png"
                title="Frank Adam"
            />

            <Story 
                image="https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://cdn.pixabay.com/photo/2016/12/01/01/59/christmas-1874292__340.png"
                title="Tim Nillo"
            />
        </div>
    )
}

export default StoryReel;
