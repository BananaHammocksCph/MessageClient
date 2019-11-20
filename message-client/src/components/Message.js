import React from 'react';

export const Message = (props) => {
  return (
    <div className="Message">
    <div className="Comment-Title">
      {props.title }
    </div>
    <div className="Comment-date">
      { props.date }
    </div>
        < div className = "Comment-text" >
      { props.text }
      </div >
      </div>
  )

}