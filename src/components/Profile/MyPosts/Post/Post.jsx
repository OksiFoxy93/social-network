import React from 'react';
import { item, avatar, likeWrapper, likeBtn, imgLikeWrapper } from './Post.module.css';
import defaultAvatar from "../../../../assetc/image/default-avatar.png";

export default function Post({ photos, text, likes }) {

    return (
        <>
            <div className={ item }>
                <div className={ avatar }>
                    <img src={ photos.large || photos.small || defaultAvatar } width="100%" alt="avatar"/>
                </div>
                <p>{ text }</p>
            </div>
            <div className={ likeWrapper }>
                <button className={ likeBtn }>
                    <div className={ imgLikeWrapper }>
                        <img
                            src="https://img.flaticon.com/icons/png/512/126/126473.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                            alt="" width="100%"/>
                    </div>
                </button>
                <p>{ likes }</p>
            </div>
        </>
    )
}