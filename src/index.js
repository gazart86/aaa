import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index';
import App from './App';
import {state, addPost, updateNewPostText, subscribe} from './Redux/state';
import {BrowserRouter} from 'react-router-dom';


let reRender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

reRender(state);

subscribe(reRender);

reportWebVitals();