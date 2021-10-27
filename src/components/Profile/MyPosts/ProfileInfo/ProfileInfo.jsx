import React from 'react';
import { info, avatar } from './ProfileInfo.module.css';
import defaultAvatar from "../../../../assetc/image/default-avatar.png";
import { fon } from "../../Profile.module.css";

const ProfileInfo = ({ profileData }) => {
    return (
        <>
            <div className={ fon }>
                <img
                    src="https://img.freepik.com/free-photo/beach-sea-sand-and-palm-in-summer-day_63047-1260.jpg?size=626&ext=jpg"
                    width="100%" alt=""/>
            </div>
            <div className={ info }>
                <div className={ avatar }>
                    <img src={ profileData.photos.large || profileData.photos.small || defaultAvatar } width="100%" alt="avatar"/>
                </div>
                <div>
                    <h2>{ profileData.fullName }</h2>
                    <p>About me: { profileData.aboutMe }</p>
                    <h3>Contacts</h3>
                    <p>facebook: { profileData.contacts.facebook }</p>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;