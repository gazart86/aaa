import React from 'react';
import s from './Post.module.css';
import like from './likes/like.png';
import dislike from './likes/dislike.png';


function Post(props) {
  return (
    <div className={s.item}>
      <img src={'https://e7.pngegg.com/pngimages/931/209/png-clipart-computer-icons-symbol-avatar-logo-person-with-helmut-miscellaneous-black.png'} alt={'desc'} />
      {props.message}
      <div className={s.likes}>
        <span>
          <img src={like} alt={'l'} /> {props.like}
        </span>
        <span>
          {props.dlike}
          <img src={dislike} alt={'dl'} />
        </span>
      </div>
    </div>
  )
}

export default Post;