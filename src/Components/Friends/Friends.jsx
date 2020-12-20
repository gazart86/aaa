import React from 'react';
import s from './Friends.module.css';


const Friends = () => {
    return (
        <div className={s.friendsWrapper}>
            <div className={s.friendsLogo}>
                <img src="https://thumbs.dreamstime.com/b/happy-programmer-day-banner-code-symbol-polygonal-wireframe-style-vector-illustration-happy-programmer-day-banner-157094845.jpg" alt="img"/>
            </div>
        </div>
    )
}

export default Friends;