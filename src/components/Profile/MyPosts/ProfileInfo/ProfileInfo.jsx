import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = ({ profileData }) => {
  return (
    <div className={classes.info}>
      <div className={classes.avatar}>
        <img src={profileData.src} width="100%" alt="avatar"/>
      </div>
      <div>
        <h2>{profileData.name}</h2>
        <p>Age: {profileData.age}</p>
        <p>Job: {profileData.job}</p>
        <p>City: {profileData.city}</p>
        <p>Education: {profileData.education}</p>
      </div>
    </div>
  )
}

export default ProfileInfo;