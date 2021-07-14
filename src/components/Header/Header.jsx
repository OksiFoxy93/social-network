import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
    return (
        <header className={classes.header}>
            <NavLink to="/profile" className={classes.logo}>
                <span className={classes.logoSpan}>ON</span>line
            </NavLink>
      </header>
    )
}