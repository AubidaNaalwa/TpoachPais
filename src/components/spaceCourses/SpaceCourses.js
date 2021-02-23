import React, { useEffect, useState } from 'react';
import CourseCard from './SpaceCourseCard';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

export default function Courses(props) {
    const [courses, setCourses] = useState([]);

    async function fetchCourses() {
        const res = await axios.get("/space/courses");
        setCourses(res.data.courses);
    }

    useEffect(() => { fetchCourses(); }, []);

    return (
        <Grid container direction="row" justify="space-between" spacing={3} style={{marginTop: 15}}>
        {
            courses.map((c) => (
                <Grid item key={c._id}>
                    <CourseCard setCourse={props.setCourse} course={c} />
                </Grid>
            ))
        }
        </Grid>
    );
}