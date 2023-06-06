import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';

interface StatisticsCardProps {
  title: string;
  count: number;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ title, count }) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default StatisticsCard;
