import React from 'react';
import {Message} from './Message';

export const MessageHub = (props) => {
  return (
      <div className="MessageHub">
        <div className="Title">
          { props. title }
          </div>
    <ul>
      {props.messages.map(function (msg, index) {
        return <Message title={msg.title} date={msg.date} text={msg.text} />;
      })}
    </ul>
    </div>
  )
}