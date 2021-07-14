import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import {Route, BrowserRouter} from 'react-router-dom'

function App({state, addPost, updateTextareaPost}) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Sidebar sidebar={state.sidebar}/>
      <div className="app-content">
        <Route path="/profile" render={ () => <Profile profilePage={state.profilePage} addPost={addPost} updateTextareaPost={updateTextareaPost}/> } />
        <Route path="/dialogs" render={ () => <Dialogs dialogsPage={state.dialogsPage}/>} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
