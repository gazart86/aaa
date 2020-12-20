import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
   return (
      <div>
         <div className={s.piBanner}>
            <img className={s.profileImg} src={'https://c4.wallpaperflare.com/wallpaper/435/542/549/javascript-google-node-js-html-microsoft-visual-studio-hd-wallpaper-thumb.jpg'} alt={'desc'}/>
         </div>
         <div className={s.blockDescription}>
            PROFILE DESCRIPTION
         </div>
      </div>
   )
}

export default ProfileInfo;