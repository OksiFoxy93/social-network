import React from 'react';
import { active, nav, item, sidebarWrapper, friendTitle, friendBlock } from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';

export default function Sidebar({ sidebar }) {
    return (
        <div className={ sidebarWrapper }>
            <nav className={ nav }>
                <ul>
                    <li className={ item }>
                        <NavLink to="/profile" activeClassName={ active }>Profile</NavLink>
                    </li>
                    <li className={ item }>
                        <NavLink to="/dialogs" activeClassName={ active }>Messages</NavLink>
                    </li>
                    <li className={ item }>
                        <NavLink to="/news" activeClassName={ active }>News</NavLink>
                    </li>
                    <li className={ item }>
                        <NavLink to="/music" activeClassName={ active }>Music</NavLink>
                    </li>
                    <li className={ item }>
                        <NavLink to="/settings" activeClassName={ active }>Settings</NavLink>
                    </li>
                    <li className={ item }>
                        <NavLink to="/find-user" activeClassName={ active }>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <p className={ friendTitle }>Friends</p>
            <div className={ friendBlock }>
                { sidebar.sidebarData.map(el => <Friend key={ el.id } name={ el.name } src={ el.src }/>) }

            </div>
        </div>
    )
}