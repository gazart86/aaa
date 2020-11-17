import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


function DialogItem(props) {
  let path = '/dialogs/' + props.id;

  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  )
}


function Message(props) {
  return (
    <div className={s.message}>{props.message}</div>
  )
}


function Dialogs(props) {

  let dialogsData = [
    {id: 1, name: 'Artyom'}, 
    {id: 2, name: 'Artur'}, 
    {id: 3, name: 'John'}, 
    {id: 4, name: 'David'}, 
    {id: 5, name: 'Narek'}, 
    {id: 6, name: 'Karen'},   
  ];

  let messagesData = [
    {id: 1, name: 'Artyom'}, 
    {id: 2, name: 'Artur'}, 
    {id: 3, name: 'John'}, 
    {id: 4, name: 'David'}, 
    {id: 5, name: 'Narek'}, 
    {id: 6, name: 'Karen'},   
  ];


  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name={dialogsData.[0].name} id={dialogsData.[0].id}/>
        <DialogItem name={dialogsData.[1].name} id={dialogsData.[1].id}/>
        <DialogItem name={dialogsData.[2].name} id={dialogsData.[2].id}/>
        <DialogItem name={dialogsData.[3].name} id={dialogsData.[3].id}/>
        <DialogItem name={dialogsData.[4].name} id={dialogsData.[4].id}/>
        <DialogItem name={dialogsData.[5].name} id={dialogsData.[5].id}/>
        <DialogItem name={dialogsData.[6].name} id={dialogsData.[6].id}/>

      </div>
      <div className={s.messages}>
        <Message message={'Hi, there bro'}/>
        <Message message={'whats up, Emmy'}/>
        <Message message={'Hey, whats up ?'}/>
      </div>
    </div>
  )
}

export default Dialogs;