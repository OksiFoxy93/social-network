import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default function Profile( { profilePage } ) {
    return (
        <div>

        <div  className={classes.fon}>
          <img src="https://img.freepik.com/free-photo/beach-sea-sand-and-palm-in-summer-day_63047-1260.jpg?size=626&ext=jpg" width="100%" alt=""/>
        </div>

        <ProfileInfo profileData={profilePage.profileData}/>

        <MyPostsContainer/>
      
      </div>
    )
}

