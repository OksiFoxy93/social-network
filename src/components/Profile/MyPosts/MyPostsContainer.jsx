import React from 'react';
import {addPostActionCreator, updateTextareaPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        src: state.profilePage.profileData.src,
        newPostText: state.profilePage.newPostText

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTextareaPost: text => dispatch(updateTextareaPostActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;