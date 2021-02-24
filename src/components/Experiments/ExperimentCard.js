import React, { useState } from 'react';
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
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import UpdateExperiments from './UpdateExperiments';

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

	const isAdmin = true // REMOVE IN FUTURE

	const classes = useStyles(),
		eInfo = props.experiment,
		setExperiment = props.setExperiment,
		[err, setErr] = useState(0);

	const [open, setOpen] = useState(false)

	const handleRemove = (id) => {
		props.handleRemove(id)
	}

	const handleEdit = () => {
		setOpen(true)
	}

	return (
		<div>
			{isAdmin ? <div className='adminBtns'>
				<DeleteOutlineRoundedIcon onClick={() => handleRemove(eInfo._id)} />
				<EditRoundedIcon onClick={handleEdit} />
			</div> : null
			}
			<Link to={window.location.pathname === '/tpais/experiments' ? '/tpais/experiments/experimentinfo' : '/space/experiments/experimentinfo'}>
				<Card className={classes.root} onClick={() => setExperiment(eInfo)}>
					<CardActionArea>
						<CardMedia>
							<img className={classes.media} src={!err ? eInfo.defaultImg : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"} onError={() => setErr(1)} />
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
				</Card>
			</Link>
			{open && <UpdateExperiments experimentInfo={eInfo} setOpen={setOpen} handleEdit={props.handleEdit} />}
		</div>
	);
}