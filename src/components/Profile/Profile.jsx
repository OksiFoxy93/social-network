import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

export default function Profile({profilePage, addPost, updateTextareaPost}) {
    return (
        <div>

        <div  className={classes.fon}>
          <img src="https://img.freepik.com/free-photo/beach-sea-sand-and-palm-in-summer-day_63047-1260.jpg?size=626&ext=jpg" width="100%" alt=""/>
        </div>

        <ProfileInfo profileData={profilePage.profileData}/>

        <MyPosts postData={profilePage.postData} src={profilePage.profileData.src} addPost={addPost} newPostText={profilePage.newPostText} updateTextareaPost={updateTextareaPost}/>
      
      </div>
    )
}