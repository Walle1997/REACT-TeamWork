import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const Favorites: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);

  return (
    <div>
      <h1>Избранное</h1>
      {favorites.length === 0 ? (
        <Typography variant="body1">У вас нет избранных элементов.</Typography>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {favorites.map((item) => (
            <Card key={item.id} style={{ width: '200px' }}>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Удалить из избранного</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;