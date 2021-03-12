import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import PageNotFound from '../PageNotFound';
import LoadingSpinner from '../LoadingSpinner';
import SnackBar from '../SnackBar';
import { useLocation } from 'react-router-dom';
import { SNACKBAR_PROPS, API_PATH } from '../../Constants';

export default function Courses(props) {
    const [courses, setCourses] = useState([]),
    [isLoading, setLoading] = useState(true),
    [snack, setSnack] = useState(''),
    getPath = useLocation().pathname.includes('/space') ? "space" : "tpais";

    const handleRemove = (id) => {
        try {
            axios.delete(`${API_PATH}/${getPath}/courses/delete/${id}`);
            const tempCourses = [...courses];
            const i = tempCourses.findIndex(c => c._id === id);
            tempCourses.splice(i, 1);
            setCourses(tempCourses);
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_REMOVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleEdit = (course) => {
        try {
            axios.put(`${API_PATH}/${getPath}/courses/update/${course._id}`, course);
            const tempCourses = [...courses];
            const i = tempCourses.findIndex(c => c._id === course._id);
            tempCourses[i] = course;
            setCourses(tempCourses);
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    useEffect(() => {
        async function fetchCourses() {
            try {
                const courses = await axios.get(`${API_PATH}/${getPath}/courses`);
                setCourses(courses.data.courses);
            }
            catch {
                setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
            }
            finally {
                setLoading(false);
            }
        }
        fetchCourses();
    }, [getPath]);

    return (
        <div>
            <Grid container direction="row" justify="space-evenly" spacing={3}>
            {
                isLoading ? <LoadingSpinner /> :
                courses.length > 0 ? courses.map((c) => (
                    <Grid item key={c._id}>
                        <CourseCard setCourse={props.setCourse} handleRemove={handleRemove} handleEdit={handleEdit} course={c} />
                    </Grid>
                ))
                : <PageNotFound />
            }
            </Grid>
            <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
        </div>
    );
}