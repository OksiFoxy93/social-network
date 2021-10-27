import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

export default function Dialogs( { dialogsPage, sendMessage, updateTextarea } ) {
    let onSendMessage = () => {
        sendMessage();
    }
    let onUpdateTextarea = (event) => {
        let text = event.target.value;
        updateTextarea(text)
    }

    return (
        <div>
            <h1>Dialogs</h1>
            <div className={classes.wrapper}>
                <div className={classes.dialogsWrapper}>
                    {dialogsPage.dialogsData.map( el => <DialogItem key={el.id}  name={el.name} path={el.path} src={el.src} /> )}
                </div>
                <div className={classes.messagesWrapper}>
                    {dialogsPage.messageData.map( el => <Message key={el.id} id={el.id} name={el.name} message={el.message} src={el.src} /> )}

                <hr />
                <div className={classes.blockSendMessage}>
                    <div className={classes.avatar}>
                        <img src="https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" width="100%" alt="" />
                    </div>
                    <textarea className={classes.textarea} onChange={onUpdateTextarea} value={dialogsPage.newMessageText} placeholder="Enter your message"/>
                    <button className={classes.btn} onClick={onSendMessage}>Send</button>
                </div>
                </div>
                
            </div>
           
        </div>
    )
}