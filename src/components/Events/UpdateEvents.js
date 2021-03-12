import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Rating from '@material-ui/lab/Rating';
import InputLabel from '@material-ui/core/InputLabel';
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
        minWidth: 280,
        width: '50vw',
        display: 'grid',
        minHeight: '80vh',
        overflowY: 'auto'
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
        fontSize: '140%',
        color: 'white',
        marginTop: 10
    },
    StickyDiv: {
        display: 'block'
    },
    formControlSticky: {
        marginTop: 7,
        marginBottom: 5,
        marginRight: -4,
        fontSize: '120%'
    },
    inputLabelSticky: {
        padding: 2,
        marginRight: 7
    }
}));

export default function UpdateEvents(props) {
    const [event, setEvent] = useState(props.eventInfo),
    [snack, setSnack] = useState(''),
    classes = useStyles();

    const handleClose = () => {
        props.setOpen(false);
    };

    const update = () => {
        const { name, shortDescription } = event;
        if (name && shortDescription ) {
            props.handleEdit(event);
            handleClose();
        }
        else
            setSnack({ message: SNACKBAR_PROPS.MessageType.WARNING_EMPTY, severity: SNACKBAR_PROPS.SeverityType.WARNING });
    }

    const updateInput = (e) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    }

    return (
		<Modal className={classes.modal} open={true} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500}}>
			<Fade in={true}>
                    <div className={classes.modalUpdate}>
                    <span title="اغلاق" className={classes.closeBtn} onClick={handleClose}>&times;</span>
                    <TextField required label="العنوان" value={event.name} variant="standard" name="name" onChange={updateInput} />
                    <TextField label="رابط الصورة"  value={event.img} variant="standard" name="img" onChange={updateInput} />
                    <TextField required label="شرح مُختصر" value={event.shortDescription} variant="standard" name="shortDescription" onChange={updateInput} />
                    <TextField multiline rows={3} label="شرح موسع" value={event.longDescription} variant="standard" name="longDescription" onChange={updateInput} />
                    <TextField label="زمن الحدث" value={event.duration} variant="standard" name="duration" onChange={updateInput} />
                    <div className={classes.StickyDiv}>
                        <FormControlLabel label="تثبيت بالصفحة الرئيسية" className={classes.formControlSticky} control={<Checkbox name="sticky" checked={event.sticky} onChange={e => setEvent({...event, sticky: e.target.checked})} color="primary" />} />
                        <InputLabel className={classes.inputLabelSticky} htmlFor="stickyOrder">تحديد الأولوية</InputLabel>
                        <Rating disabled={!event.sticky} size="large" name="stickyOrder" value={event.stickyOrder} onChange={e => setEvent({...event, stickyOrder: parseInt(e.target.value)})} />
                    </div>
                    <Button className={classes.btn} variant="contained" color="primary" onClick={update}>تعديل</Button>
                    <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
				</div>
			</Fade>
		</Modal>
    );
}