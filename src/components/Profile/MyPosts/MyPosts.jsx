import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

export default function MyPosts({postData, src, addPost, updateTextareaPost, newPostText}) {
  let elementTextarea = React.createRef()

  let onAddPost = () => {
      addPost();
  }
  let onUpdateTextarea = () => {
    let text = elementTextarea.current.value;
    updateTextareaPost(text);
  }

debugger
      return (
      <div className={classes.posts}>
        <div>
              <h2>My posts</h2>
              <div className={classes.wrapper}>
                <textarea className={classes.textarea} onChange={onUpdateTextarea} ref={elementTextarea} value={newPostText}/>
                <button className={classes.btn} onClick={onAddPost}>Add post</button>
              </div>
          </div>

        <div className="posts">
          {postData.map( el => <Post src={src} text={el.text} likes={el.likes} />)}
        </div>
      </div>
      
    )
}