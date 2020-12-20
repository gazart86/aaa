import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './myPosts/MyPosts';


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  )
}

export default Profile;