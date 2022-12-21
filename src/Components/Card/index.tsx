import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Rating } from '@mui/material';
import Woman from '../../Assets/1431622.jpg';

export default function Cards({data}:any) {

  return (
    <Card sx={{ maxWidth: 345, margin: '20px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.picture}
          alt={data.name}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
        {`${data.title}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          {data.avaliation&&(
           <Rating name="read-only" value={data.avaliation} readOnly />
       )}
        </CardContent>

      
      </CardActionArea>
    </Card>
  );
}
