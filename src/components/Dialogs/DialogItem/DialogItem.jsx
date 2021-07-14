import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, path, src }) => {
    return (
        <div className={classes.dialog}>
            <div className={classes.avatar}>
                <img src={src} width="100%" alt="" />
            </div>
        <NavLink to={'/dialogs/' + path} activeClassName={classes.active}>
            {name}
        </NavLink>
    </div>
    )
}

export default DialogItem;