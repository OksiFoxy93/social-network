import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateTextareaPost} from './state'

export let renderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateTextareaPost={updateTextareaPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}
