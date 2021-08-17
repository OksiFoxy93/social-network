import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route, BrowserRouter } from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";

function App() {
  debugger
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <SidebarContainer />
      <div className="app-content">
        <Route path="/profile" render={ () => <ProfileContainer /> } />
        <Route path="/dialogs" render={ () => <DialogsContainer/> } />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
