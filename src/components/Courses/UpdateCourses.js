import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SnackBar from '../SnackBar';
import { SNACKBAR_PROPS } from '../../Constants';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalUpdate: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		outline: 0,
		padding: theme.spacing(0, 4, 3),
        minWidth: 310,
        width: '50vw',
        display: 'grid',
        height: '70vh'
	},
    closeBtn: {
        justifySelf: 'end',
        fontSize: '300%',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: 'max-content',
        '&:hover': {
			transform: 'scale(1.1)'
		}
    },
    btn: {
        fontSize: '120%',
        color: 'white'
    }
}));

export default function UpdateCourses(props) {
    const [course, setCourse] = useState(props.courseInfo),
    [snack, setSnack] = useState(''),
    classes = useStyles();

    const handleClose = () => {
        props.setOpen(false);
    };

    const update = () => {
        const { name, img, shortDescription, longDescription, courseLink} = course;
        if (name && img && shortDescription && longDescription && courseLink) {
            props.handleEdit(course);
            handleClose();
        }
        else
            setSnack({ message: SNACKBAR_PROPS.MessageType.WARNING_EMPTY, severity: SNACKBAR_PROPS.SeverityType.WARNING });
    }

    const updateInput = (c) => {
        const { id, value } = c.target;
        setCourse({ ...course, [id]: value });
    }

    return (
        <Modal className={classes.modal} open={true} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500}}>
            <Fade in={true}>
                <div className={classes.modalUpdate}>
                    <TextField required label="العنوان" value={course.name} variant="standard" id="name" onChange={updateInput} />
                    <TextField label="رابط الصورة" value={course.img} variant="standard" id="img" onChange={updateInput} />
                    <TextField required label="شرح مختصر" value={course.shortDescription} variant="standard" id="shortDescription" onChange={updateInput} />
                    <TextField required multiline rows={3} label="شرح موسع" value={course.longDescription} variant="standard" id="longDescription" onChange={updateInput} />
                    <TextField label="رابط التسجيل" value={course.courseLink} variant="standard" id="courseLink" onChange={updateInput} />
                    <Button className={classes.btn} variant="contained" color="primary" onClick={update}>تعديل</Button>
                    <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
                </div>
			</Fade>
		</Modal>
    );
}