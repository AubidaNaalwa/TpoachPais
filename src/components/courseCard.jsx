import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/courses.css'
import CourseInfo from './courseInfo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 150,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const cInfo = props.course
  const setCourse = props.setCourse

  function handleClick(e) {
    setCourse(e)
  }

  return (
    <Card className={classes.root} className='what'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/Sz6ZAx6.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cInfo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cInfo.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => handleClick(cInfo)} size="small" color="primary">
          <Link to='/tpais/courses/courseinfo'>اقرأ المزيد...</Link>
        </Button>
      </CardActions>
    </Card>
  );
}