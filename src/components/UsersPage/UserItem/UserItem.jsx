import React from 'react';
import {
    wrapper,
    followbtn,
    avatar,
    unfollowbtn,
    body,
    statusClass,
    countryDetails
} from './UserItem.module.css';
import defaultAvatar from '../../../assetc/image/default-avatar.png'
import { NavLink } from "react-router-dom";


const UserItem = ({ userInfo, unfollow, follow }) => {
    const { name, status, photos, followed, id } = userInfo;
    debugger

    return (
        <div className={ wrapper }>
            <div>
                <div className={ avatar }>
                    <NavLink to={ `/profile/${ id }` } onClick={ () => {
                    } }>
                        <img src={ photos.large || photos.small || defaultAvatar } width="100%" alt=""/>
                    </NavLink>
                </div>
                { followed ?
                    <button className={ `${ followbtn } ${ unfollowbtn }` }
                            onClick={ () => unfollow(id) }>Unfollow</button> :
                    <button className={ followbtn }
                            onClick={ () => follow(id) }>Follow</button>
                }
            </div>

            <div className={ body }>
                <div>
                    <h2>{ name }</h2>
                    <p className={ statusClass }>{ status }</p>
                </div>
                <div className={ countryDetails }>
                    <p>{ "Ukraine" },</p>
                    <p>{ "Kharkiv" }</p>
                </div>
            </div>
        </div>
    )
}

export default UserItem;