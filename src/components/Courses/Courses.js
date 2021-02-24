import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

export default function Courses(props) {
    const [courses, setCourses] = useState([]),
    [currPath, setCurrPath] = useState('');

    const handleRemove = (id) => {
        try {
            axios.delete(`/course/${currPath}/delete/id=${id}`);
            const tempCourses = [...courses];
            const i = tempCourses.findIndex(c => c._id === id);
            tempCourses.splice(i, 1);
            setCourses(tempCourses);
        } catch (error) {
            console.log(error.toString());
        }
    }

    const handleEdit = (course) => {
        try {
            axios.put(`/course/${currPath}/update/id=${course._id}`, course);
            const tempCourses = [...courses];
            const i = tempCourses.findIndex(c => c._id === course._id);
            tempCourses[i] = course;
            setCourses(tempCourses);
        } catch (error) {
            console.log(error.toString());
        }
    }

    useEffect(() => {
        async function fetchCourses() {
            let courses;
            if (window.location.pathname === '/tpais/courses') {
                courses = await axios.get(`/courses`);
                setCurrPath('tpoach');
            }
            else {
                courses = await axios.get(`/space/courses`);
                setCurrPath('space');
            }
            setCourses(courses.data.courses);
        }
        fetchCourses();
    }, []);

    return (
        <Grid container direction="row" justify="flex-start" spacing={10} style={{ marginTop: -10, marginRight: -1}}>
        {
            courses.map((c) => (
                <Grid item key={c._id}>
                    <CourseCard setCourse={props.setCourse} handleRemove={handleRemove} handleEdit={handleEdit} course={c} />
                </Grid>
            ))
        }
        </Grid>
    );
}