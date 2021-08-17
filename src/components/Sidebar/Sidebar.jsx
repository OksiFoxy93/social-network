import React from 'react';
import classes from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';

export default function Sidebar({sidebar}) {
    debugger
    return (
      <div className={classes.sidebarWrapper}>
        <nav className={classes.nav}>
          <ul>
            <li className={classes.item}>
              <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </li>
          </ul>
        </nav>

        <p className={classes.friendTitle}>Friends</p>
        <div className={classes.friendBlock}>
          {sidebar.sidebarData.map( el => <Friend name={el.name} src={el.src}/>)}

        </div>
      </div>
    )
}