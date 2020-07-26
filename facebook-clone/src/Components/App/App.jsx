import React, { useState } from 'react';
import Message from '../Messages/Message';

import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hey', 'yo']);
  const [userName, setUserName] = useState('');

  const sendMessage = (event) => {
    // all the logic to send a messagegoes gere
    event.preventDefault();

    setMessages([...messages, input]);
    setInput('');
  };
  return (
    <div>
      {/* Inpur field */}
      <FormControl>
        <InputLabel>Enter Your message</InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)}></Input>
        <Button
          disabled={!input}
          variant='contained'
          color='primary'
          type='submit'
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </FormControl>

      {messages.map((message) => {
        return <Message text={message} />;
      })}
    </div>
  );
};

export default App;
