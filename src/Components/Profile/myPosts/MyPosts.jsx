import React from 'react';
import  s from '../myPosts/MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} like={p.like} dlike={p.dlike}/>);

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name"/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;