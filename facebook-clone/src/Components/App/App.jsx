import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hey', 'yo']);

  console.log(messages);

  const sendMessage = (event) => {
    // all the logic to send a messagegoes gere
    event.preventDefault();

    setMessages([...messages, input]);
    setInput('');
  };
  return (
    <div>
      {/* Inpur field */}

      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        {/* Send Chat button */}
        <Button
          disabled={!input}
          variant='contained'
          color='primary'
          type='submit'
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </form>

      {/* Messages themselves */}
      {messages.map((message) => {
        return <p>{message}</p>;
      })}
    </div>
  );
};

export default App;
