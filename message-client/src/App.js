import React from 'react';
import {MessageHub} from './components/MessageHub';

const App = () => {

  const RabbitMsg = {
    title: "ReceivedFrom",
    messages: [{ title: "msg1", date: "xxx", text: "Hello World" }, { title: "msg2", date: "xxx2", text: "Hello Moto" }]
  } 

  return (
    <div className="App">
      < MessageHub title={RabbitMsg.title} messages={RabbitMsg.messages} />
   </div>
  );
}

export default App;
