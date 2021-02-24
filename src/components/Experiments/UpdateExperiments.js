import React, { useState } from 'react'
import { TextField, Popover, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
    popoverRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default function UpdateExperiments(props) {
    const [experiment, setExperiment] = useState(props.experimentInfo),
    classes = useStyles();

    const handleClose = () => {
        props.setOpen(false);
    };

    const update = () => {
        const { name, img, shortDescription, longDescription, category } = experiment;
        if (name && img && shortDescription && longDescription && category) {
            props.handleEdit(experiment);
            handleClose();
        }
        else
            alert('Missing Fields');
    }

    const updateInput = (e) => {
        const { id, value } = e.target;
        setExperiment({ ...experiment, [id]: value });
    }

    return (
        <Popover open={true} onClose={handleClose} anchorReference={"none"} classes={{ root: classes.popoverRoot }}>
            <div className="update">
                <TextField required label="Title" value={experiment.name} variant="outlined" id="name" onChange={updateInput} />
                <TextField required label="Img URL" value={experiment.img} variant="outlined" id="img" onChange={updateInput} />
                <TextField required label="Short Description" value={experiment.shortDescription} variant="outlined" id="shortDescription" onChange={updateInput} />
                <TextField required label="Long Description" value={experiment.longDescription} variant="outlined" id="longDescription" onChange={updateInput} />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                    <Select native value={experiment.category} id="category" onChange={updateInput} label="Category">
                        <option value={'Ch'}>Chemistry</option>
                        <option value={'Ph'}>Physics</option>
                        <option value={'Bio'}>Biology</option>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" onClick={update}>Update</Button>
            </div>
        </Popover>
    )
}