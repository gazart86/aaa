import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './DialogItem/Message/Message.jsx';


const Dialogs = (props) => {

  // Through the map() method we got this string from incoming array from server.
  let dialogsElements  = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>

      <div className={s.messages}>
        { messagesElements }
      </div>

    </div>
  )
}

export default Dialogs;