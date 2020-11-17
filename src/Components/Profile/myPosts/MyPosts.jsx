import React from 'react';
import  s from '../myPosts/MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div className={s.postsBlock}>
       <h3>My Posts</h3>
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className={s.posts}>
        <Post message={"It's a new post"}  like={'3'} dlike={'0'}/>
        <Post message={"It's an old post"} like={'5'} dlike={'1'}/>
        <Post message={"It's a good post"} like={'9'} dlike={'2'}/>
      </div>
    </div>
  )
}

export default MyPosts;