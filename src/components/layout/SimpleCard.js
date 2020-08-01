import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const { header, noOfCase, content } = props;
  return (
    <Card className={classes.root} style={{ backgroundColor: '#C0C0C0' ,marginBottom:'20px'}}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {header}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {noOfCase} cases matched this month
        </Typography>
        <Typography variant="h8" component="h8">
          Reviews:
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Know More</Button>
      </CardActions>
    </Card>
  );
}