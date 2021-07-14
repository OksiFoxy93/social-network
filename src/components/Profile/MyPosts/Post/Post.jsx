import React from 'react';
import classes from './Post.module.css';

export default function Post(props) {

    return (
      <>
      <div className={classes.item}>
        <div className={classes.avatar}>
          <img src={props.src} width="100%" alt="avatar"/>
        </div>
        <p>{props.text}</p>
      </div>
      <div className={classes.likeWrapper}>
        <button className={classes.likeBtn}>
          <div className={classes.imgLikeWrapper}>
           <img src="https://img.flaticon.com/icons/png/512/126/126473.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" width="100%"/>
          </div>
        </button> 
        <p>{props.likes}</p>
      </div>
      </>
    )
}