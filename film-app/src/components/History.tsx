import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Card, CardContent, Typography } from '@mui/material';

const History: React.FC = () => {
  const history = useSelector((state: RootState) => state.history.items);

  return (
    <div>
      <h1>История запросов</h1>
      {history.length === 0 ? (
        <Typography variant="body1">У вас нет истории запросов.</Typography>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {history.map((item) => (
            <Card key={item.id} style={{ width: '100%', maxWidth: '600px' }}>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.timestamp}</Typography>
                <Typography variant="body1">{item.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;