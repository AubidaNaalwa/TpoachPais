import React, { Component, useEffect } from 'react'
import CourseCard from './ExperimentCard'
import CourseInfo from './ExperimentInfo'
import '../styles/courses.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
const axios = require('axios')

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Courses() {
    const [spacing, setSpacing] = React.useState(2);
    const [experimnts, setExperimnts] = React.useState([])
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    async function fetchCourses() {
        const res = await axios.get("/experimnts")
        setExperimnts(res.data.courses)
    }

    useEffect(() => {
        fetchCourses()
    }, [])

    return (
        <div id='container'>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={10}>
                        {courses.map((value) => (
                            <Grid key={value._id} item>
                                <CourseCard className='card' course={value}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}