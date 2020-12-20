import React from 'react';
import ReactDOM from 'react-dom';
import './index';
import App from './App';
import {state} from './Redux/state';
import {addPost} from './Redux/state';
import {BrowserRouter} from 'react-router-dom';


export let reRender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

export default reRender();