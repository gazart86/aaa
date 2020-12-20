import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Friends from './Components/Friends/Friends';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />
        <div className={'app-wrapper-content'}>
          <Route path={'/profile'} render={ () => <Profile state={props.state.profilePage} addPost={props.addPost} /> } />
          <Route path={'/dialogs'} render={ () => <Dialogs state={props.state.messagesPage} />} />
          <Route path={'/news'}    render={ () => <News />} />
          <Route path={'/friends'} render={ () => <Friends />} />
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;