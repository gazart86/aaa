import React from 'react';
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img src={'https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png'} alt={''}/>
    </header>
  )
}

export default Header;