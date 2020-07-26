import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(messages);

  const sendMessage = (event) => {
    // all the logic to send a messagegoes gere
    if (input.length === 0) {
      return alert('Please Enter a meessage');
    }
    setMessages([...messages, input]);
    setInput('');
  };
  return (
    <div>
      {/* Inpur field */}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {/* Send Chat button */}
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default App;
