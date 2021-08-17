import React from 'react';
import {
    sendMessageCreator,
    updateMessageTextareaCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
   return {
       dialogsPage: state.dialogsPage,
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTextarea: (text) => dispatch(updateMessageTextareaCreator(text)),
        sendMessage: () => dispatch(sendMessageCreator())
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;