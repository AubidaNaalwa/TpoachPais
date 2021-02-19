import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/experiments.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const eInfo = props.experiment
  const setExperiment = props.setExperiment

  function handleClick(e) {
    setExperiment(e)
  }

  return (
    <Card className={classes.root} className='what'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://sites.google.com/site/hanasamiraa/_/rsrc/1508501213109/home/tjarb-kymyayyte-mtnwte-wshyqte/%D8%AA%D8%AC%D8%A7%D8%B1%D8%A8%20%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9.jpg?height=266&width=400"
        />
        <CardContent>
          <Typography className="strings" gutterBottom variant="h5" component="h2">
            {eInfo.name}
          </Typography>
          <Typography className="strings" variant="body2" color="textSecondary" component="p">
            {eInfo.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => handleClick(eInfo)} size="small" color="primary">
          <Link to='/tpais/experiments/experimentinfo'>اقرأ المزيد...</Link>
        </Button>
      </CardActions>
    </Card>
  );
}