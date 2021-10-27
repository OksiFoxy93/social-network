import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default function Profile({ profilePage }) {
    return (
        <div>
            <ProfileInfo profileData={ profilePage.profileData }/>
            <MyPostsContainer/>

        </div>
    )
}

