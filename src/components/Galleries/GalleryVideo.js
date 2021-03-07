import React, { useState } from "react";
import GalleryVideoPlayer from "./GalleryVideoPlayer";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    imgThumb: {
        cursor: 'pointer',
        boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
        opacity: 0.8,
        transition: 'all 0.2s ease-in-out',
        width: '100%',
        '&:hover': {
            opacity: 1,
            boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.5)'
		}
    },
    divDesc: {
        lineHeight: 1.2,
        marginTop: -10,
        marginBottom: 20,
        display: 'table'
    },
    spanTitle: {
        color: '#b80808',
        fontSize: '100%'
    },
    spanShortDesc: {
        color: '#342f42',
        fontSize: '80%',
        boxSizing: 'border-box',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        cursor: 'zoom-in'
    },
    spanFullDesc: {
        color: '#342f42',
        fontSize: '85%',
        boxSizing: 'border-box',
        display: 'table',
        cursor: 'zoom-out'
    },
    videoIconThumbnail: {
        position: 'relative',
        top: -68,
        float: 'left',
        left: 3,
        cursor: 'pointer'
    }
}));

export default function GalleryVideo(props) {
    const [isDisplayedFullDesc, setDisplayedFullDesc] = useState(false),
    [open, setOpen] = useState(false),
    classes = useStyles();

    const handleClick = function () {
        setDisplayedFullDesc (!isDisplayedFullDesc);
    }

    return (
        <>
            <img className={classes.imgThumb} onClick={() => setOpen(true)} alt={props.video.name} src={props.video.thumbnail} />
            <img className={classes.videoIconThumbnail} alt="فيديو" src="./images/video_thumbnail.png" />
            <div className={classes.divDesc}>
                <span className={classes.spanTitle}>{props.video.name}</span>
                {
                    !isDisplayedFullDesc ? <span onClick={handleClick} className={classes.spanShortDesc}>{props.video.description}</span> :
                    <span onClick={handleClick} className={classes.spanFullDesc}>{props.video.description}</span>
                }
            </div>
            {open && <GalleryVideoPlayer setOpen={setOpen} video={props.video.video} />}
        </>
    );
}