import React from 'react';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile() {
   return (
      <div>
         <ProfileInfo/>
         <MyPosts/>
      </div>
   )
}

export default Profile;