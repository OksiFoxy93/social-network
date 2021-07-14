import React from 'react';
import classes from '../Sidebar.module.css';
import { NavLink } from 'react-router-dom';

export default function Friend ({name, src}) {
    return (
        <NavLink to={name} className={classes.friendItem}>
            <div className={classes.avatar}>
              <img src={src} width="100%" alt="" />
            </div>
            <p className={classes.name}>{name}</p>
        </NavLink>  
    )
}