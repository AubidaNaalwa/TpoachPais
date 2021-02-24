import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
	eInfo = props.experiment,
	setExperiment = props.setExperiment,
	[err, setErr] = useState(0);

	return (
		<Card className={classes.root}>
			<CardActionArea>
			<CardMedia>
					<img alt="img" className={classes.media} src= {!err ? eInfo.defaultImg : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg" } onError={()=>setErr(1)} />
				</CardMedia>
				<CardContent>
					<Typography gutterBottom variant="h6" component="h2">
						{eInfo.name}
					</Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        <Moment format="YYYY/MM/DD">{eInfo.date}</Moment>
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{eInfo.shortDescription}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button onClick={() => setExperiment(eInfo)} size="small" color="primary">
				<p>{item.available ? `للاشتراك والتسجيل :${item.courseLink}` : "الدورة غير متوفرة حاليا"}</p>
				if (window.location.pathname === '/tpais/experiments') {
                <Link to='/tpais/experiments/experimentinfo'>اقرأ المزيد...</Link>
            } else {
                
				<Link to='/space/experiments/experimentinfo'>اقرأ المزيد...</Link>
            }
				</Button>
			</CardActions>
		</Card>
	);
}