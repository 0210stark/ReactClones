import React from 'react';
import './Message.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Message = ({ message, username }) => {
  const isUser = username === message.username;
  return (
    <div className={`message: ${isUser && 'message_user'}`}>
      <Card className={isUser ? 'message_userCard' : 'message_questCard'}>
        <CardContent>
          <Typography color='white' variant='h5' component='h2'>
            {message.username}:{message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
