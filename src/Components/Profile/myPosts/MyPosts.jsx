import React from 'react';
import  s from '../myPosts/MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} like={p.like} dlike={p.dlike}/>);
  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
    props.addPost();
    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      
      <label>
        Write post:
        <input type='text' onChange={ onPostChange } ref={ newPostElement } value={props.inputArea} />
      </label>
      <button onClick={ addPost }>Add</button>
    
      <div className={s.posts}>
        { postsElements }
      </div>

    </div>
  )
}

export default MyPosts;