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
import UpdateCourses from './UpdateCourses';
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

export default function CourseCard(props) {
	const classes = useStyles(),
	cInfo = props.course,
	setCourse = props.setCourse,
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
				isAdmin && <div className='btns_admin'>
				<DeleteOutlineRoundedIcon onClick={() => handleRemove(cInfo._id)} />
				<EditRoundedIcon onClick={handleEdit} />
				</div>
			}
			<Link to={window.location.pathname === '/tpais/courses' ? '/tpais/courses/courseinfo' : '/space/courses/courseinfo'}>
				<Card className={classes.root} onClick={() => setCourse(cInfo)}>
					<CardActionArea>
						<CardMedia>
							<img alt="img" className={classes.media} src={cInfo.img} onError={(e) => e.target.src ='./images/default_course.jpg'} />
						</CardMedia>
						<CardContent>
							<Typography gutterBottom variant="h6" component="h2">
								{cInfo.name}
							</Typography>
							<Typography gutterBottom variant="body2" component="p">
								<Moment format="YYYY/MM/DD">{cInfo.date}</Moment>
							</Typography>
							<Typography variant="body2" component="p">
								{cInfo.shortDescription}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Link>
			{open && <UpdateCourses courseInfo={cInfo} setOpen={setOpen} handleEdit={props.handleEdit} />}
		</div>
	);
}