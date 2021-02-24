import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

export default function Courses(props) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
            let courses
            if (window.location.pathname === '/tpais/courses') {
                courses = await axios.get(`/courses`);
            } else {
                courses = await axios.get(`/space/courses`);
            }
            setCourses(courses.data.courses);
        }
        fetchCourses();
    }, []);

    return (
        <Grid container direction="row" justify="space-between" spacing={3} style={{ marginTop: 15 }}>
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