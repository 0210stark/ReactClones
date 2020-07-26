import React, { useState, useEffect } from 'react';
import Message from '../Messages/Message';

import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'vidit0210', text: 'Heya!' },
    { username: 'cris', text: 'sup' },
  ]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName(prompt('Please Enter your name'));
  }, []);

  const sendMessage = (event) => {
    // all the logic to send a messagegoes gere
    event.preventDefault();

    setMessages([...messages, { username: userName, text: input }]);
    setInput('');
  };
  return (
    <div>
      {/* Inpur field */}
      <h2>Welcome {userName}</h2>
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
        return <Message username={userName} message={message} />;
      })}
    </div>
  );
};

export default App;
