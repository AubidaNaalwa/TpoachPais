import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import UpdateExperiments from './UpdateExperiments';
import { isAdmin } from '../../Constants';

const useStyles = makeStyles({
	root: {
		maxWidth: 259,
		width: 259,
		height: 350
	},
	media: {
		height: 180,
		width: '100%'
	}
});

export default function ExperimentCard(props) {
	const classes = useStyles(),
	eInfo = props.experiment,
	setExperiment = props.setExperiment,
	[open, setOpen] = useState(false);

	const handleRemove = (id) => {
		props.handleRemove(id);
	}

	const handleEdit = () => {
		setOpen(true);
	}

	return (
		<div>
			{
				isAdmin &&
				<div className='btns_admin'>
					<DeleteOutlineRoundedIcon onClick={() => handleRemove(eInfo._id)} />
					<EditRoundedIcon onClick={handleEdit} />
				</div>
			}
			<Link to={window.location.pathname === '/tpais/experiments' ? `/tpais/experiments/${eInfo._id}` : `/space/experiments/${eInfo._id}`}>
				<Card className={classes.root} onClick={() => setExperiment(eInfo)}>
					<CardActionArea>
						<CardMedia>
							<img alt="img" className={classes.media} src={eInfo.img} onError={(e) => e.target.src ='./images/default_experiment.jpg'} />
						</CardMedia>
						<CardContent>
							<Typography gutterBottom variant="h6" component="h2">
								{eInfo.name}
							</Typography>
							<Typography gutterBottom variant="body2" component="p">
								<Moment format="YYYY/MM/DD">{eInfo.date}</Moment>
							</Typography>
							<Typography variant="body2" component="p">
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