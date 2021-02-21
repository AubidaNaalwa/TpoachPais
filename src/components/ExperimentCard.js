import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		maxWidth: 259,
		width: 259,
		height: '100%'
	},
	media: {
		height: 200
	},
	strings: {
		textAlign: 'right'
	}
});

export default function MediaCard(props) {
	const classes = useStyles(),
		eInfo = props.experiment,
		setExperiment = props.setExperiment;

	function handleClick(e) {
		setExperiment(e);
	}

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={eInfo.defaultImg}/>
				<CardContent>
					<Typography className={classes.strings} gutterBottom variant="h5" component="h2">
						{eInfo.name}
					</Typography>
					<Typography className={classes.strings} variant="body2" color="textSecondary" component="p">
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