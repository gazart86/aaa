import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo() {
   return (
      <div>
         <div className={s.piBanner}>
            <img className={s.profileImg} src={'https://www.litindia.in/images/slider/dotnet.jpg'} alt={'desc'}/>
         </div>
         <div className={s.blockDescription}>
            avatar + description
         </div>
      </div>
   )
}

export default ProfileInfo;