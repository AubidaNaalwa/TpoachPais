import React, { useEffect } from 'react';
import CourseCard from './courseCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 140,
        width: 100
    },
    control: {
        padding: theme.spacing(2)
    },
    container: {
        textAlign: 'center',
        marginTop: '5%'
    }
}));

export default function Courses(props) {
    //const [spacing, setSpacing] = React.useState(2);
    const [courses, setCourses] = React.useState([]),
    classes = useStyles(),
    func = props.setCourse;

    // const handleChange = (event) => {
    //     setSpacing(Number(event.target.value));
    // };

    async function fetchCourses() {
        const res = await axios.get("/courses");
        console.log(res);
        setCourses(res.data.courses);
    }

    useEffect(() => { fetchCourses() }, [])

    return (
        <div className="content">
            <div className={classes.container}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            {courses.map((value) => (
                                <Grid key={value._id} item>
                                    <CourseCard setCourse={func} course={value}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}