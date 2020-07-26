import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Message = ({ text, username }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography color='white' variant='h5' component='h2'>
            {username}:{text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
