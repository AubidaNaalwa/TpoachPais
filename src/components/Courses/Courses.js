import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import Grid from '@material-ui/core/Grid';
import PageNotFound from '../PageNotFound';
import SnackBar from '../SnackBar';
import { SNACKBAR_PROPS, API_PATH } from '../../Constants';
const axios = require('axios');

export default function Courses(props) {
    const [courses, setCourses] = useState([]),
    [snack, setSnack] = useState(''),
    [currPath, setCurrPath] = useState('');

    const handleRemove = (id) => {
        try {
            axios.delete(`${API_PATH}/${currPath}/courses/delete/${id}`);
            const tempCourses = [...courses];
            const i = tempCourses.findIndex(c => c._id === id);
            tempCourses.splice(i, 1);
            setCourses(tempCourses);
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleEdit = (course) => {
        try {
            axios.put(`${API_PATH}/${currPath}/courses/update/${course._id}`, course);
            const tempCourses = [...courses];
            const i = tempCourses.findIndex(c => c._id === course._id);
            tempCourses[i] = course;
            setCourses(tempCourses);
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    useEffect(() => {
        async function fetchCourses() {
            try {
                let courses;
                if (window.location.pathname === '/tpais/courses') {
                    courses = await axios.get(`${API_PATH}/tpais/courses`);
                    setCurrPath('tpais');
                }
                else {
                    courses = await axios.get(`${API_PATH}/space/courses`);
                    setCurrPath('space');
                }
                setCourses(courses.data.courses);
            }
            catch {
                setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
            }
        }
        fetchCourses();
    }, []);

    return (
        <>
            <Grid container direction="row" justify="space-evenly" spacing={3}>
            {
                courses.length > 0 ? courses.map((c) => (
                    <Grid item key={c._id}>
                        <CourseCard setCourse={props.setCourse} handleRemove={handleRemove} handleEdit={handleEdit} course={c} />
                    </Grid>
                ))
                : <PageNotFound />
            }
            </Grid>
            <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
        </>
    );
}