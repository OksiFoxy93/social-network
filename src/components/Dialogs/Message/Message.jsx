import React from 'react';
import classes from './Message.module.css';

const Message = ({ name, message, src }) => {
    return(
        <>
            {name === "Oksana"
                ?
                <div className={classes.yourMessage}>
                    <div>
                        <div className={classes.avatar}>
                            <img src={src} width="100%" alt="" />
                        </div>
                        <p className={classes.name}>{name}</p>
                    </div>
    
                    <div className={classes.message}>
                        <p>{message}</p>
                    </div>
                </div>
                :
                
                <div className={classes.friendMessage}>
                    <div className={classes.message}>
                         <p>{message}</p>
                    </div>
                    <div>
                        <div className={classes.avatar}>
                            <img src={src} width="100%" alt="" />
                        </div>
                        <p className={classes.name}>{name}</p>
                    </div>

                </div>
            }   


        </>
    )
} 

export default Message;