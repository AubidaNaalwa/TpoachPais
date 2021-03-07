import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(() => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
    closeBtn: {
        fontSize: '310%',
        fontWeight: 'bold',
        cursor: 'pointer',
        height: 50,
        color: 'white',
        '&:hover': {
			fontSize: '330%'
		},
        display: 'inline-block',
        top: 11,
        paddingRight: 2,
    },
    divIframe: {
        outline: 0,
        minWidth: 310,
        width: '90%',
        top: '10%',
        position: 'absolute',
        height: '70vh',
        maxHeight: 1064,
        maxWidth: 1810,
        display: 'block'
    },
    iframe: {
        width: '100%',
        height: '100%'
    }
}));

export default function GalleryVideoPlayer(props) {
    const classes = useStyles();

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
		<Modal className={classes.modal} open={true} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500}}>
			<Fade in={true}>
                <div className={classes.divIframe}>
                    <span title="اغلاق" className={classes.closeBtn} onClick={handleClose}>&times;</span>
                    <iframe frameBorder="0" title={props.video.name} src={props.video} allowFullScreen className={classes.iframe} />
                </div>
			</Fade>
		</Modal>
    );
}