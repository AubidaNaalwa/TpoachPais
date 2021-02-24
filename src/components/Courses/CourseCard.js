import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const useStyles = makeStyles({
	root: {
		maxWidth: 259,
		width: 259,
		height: 350
	},
	media: {
		height: 180,
		width: '100%',
	}
});

export default function MediaCard(props) {
	const classes = useStyles(),
	cInfo = props.course,
	setCourse = props.setCourse,
	[err, setErr] = useState(0);

	return (
		<Link to={window.location.pathname === '/tpais/courses' ? '/tpais/courses/courseinfo' : '/space/courses/courseinfo'}>
			<Card className={classes.root} onClick={() => setCourse(cInfo)}>
				<CardActionArea>
					<CardMedia>
						<img className={classes.media} src={!err ? cInfo.img : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"} onError={() => setErr(1)} />
					</CardMedia>
					<CardContent>
						<Typography gutterBottom variant="h6" component="h2">
							{cInfo.name}
						</Typography>
						<Typography gutterBottom variant="body2" component="p">
							<Moment format="YYYY/MM/DD">{cInfo.date}</Moment>
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{cInfo.shortDescription}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
}