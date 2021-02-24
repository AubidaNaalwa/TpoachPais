import React, { useState } from 'react';
import { TextField, Popover, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    popoverRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default function UpdateCourses(props) {
    const [course, setCourse] = useState(props.courseInfo),
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
            alert('Missing Fields');
    }

    const updateInput = (c) => {
        const { id, value } = c.target;
        setCourse({ ...course, [id]: value });
    }

    return (
        <Popover open={true} onClose={handleClose} anchorReference={"none"} classes={{ root: classes.popoverRoot }}>
            <div className="update">
                <TextField required label="Title" value={course.name} variant="outlined" id="name" onChange={updateInput} />
                <TextField required label="Img URL" value={course.img} variant="outlined" id="img" onChange={updateInput} />
                <TextField required label="Short Description" value={course.shortDescription} variant="outlined" id="shortDescription" onChange={updateInput} />
                <TextField required label="Long Description" value={course.longDescription} variant="outlined" id="longDescription" onChange={updateInput} />
                <TextField required label="Registration URL" value={course.courseLink} variant="outlined" id="courseLink" onChange={updateInput} />
                <Button variant="contained" color="primary" onClick={update}>Update</Button>
            </div>
        </Popover>
    );
}