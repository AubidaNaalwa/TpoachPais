import React, { useState } from 'react'
import { TextField, Popover, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    popoverRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default function UpdateEvents(props) {
    const [event, setEvent] = useState(props.eventInfo),
    classes = useStyles();

    const handleClose = () => {
        props.setOpen(false);
    };

    const update = () => {
        const { name, img, shortDescription, longDescription, date } = event;
        if (name && img && shortDescription && longDescription && date) {
            props.handleEdit(event);
            handleClose();
        }
        else
            alert('Missing Fields');
    }

    const updateInput = (e) => {
        const { id, value } = e.target;
        setEvent({ ...event, [id]: value });
    }

    return (
        <div>
            <Popover open={true} onClose={handleClose} anchorReference={"none"} classes={{ root: classes.popoverRoot }}>
                <div className="update" >
                    <TextField required label="Title" value={event.name} variant="outlined" id="name" onChange={updateInput} />
                    <TextField required label="Img URL"  value={event.img} variant="outlined" id="img" onChange={updateInput} />
                    <TextField required label="Short Description" value={event.shortDescription} variant="outlined" id="shortDescription" onChange={updateInput} />
                    <TextField required label="Long Description" value={event.longDescription} variant="outlined" id="longDescription" onChange={updateInput} />
                    <TextField required label="Date" value={event.date} variant="outlined" id="date" onChange={updateInput} />
                    <Button variant="contained" color="primary" onClick={update}>Update</Button>
                </div>
            </Popover>
        </div>
    );
}