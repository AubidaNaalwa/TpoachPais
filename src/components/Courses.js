import React, { useEffect } from 'react';
import CourseCard from './courseCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../styles/AubidaStyle.css'
const axios = require('axios');

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1
//     },
//     paper: {

//         width: "100%"
//     },
//     control: {
//         padding: theme.spacing(2)
//     },
//     container: {
//         textAlign: 'center',
//         marginTop: '5%'
//     }
// }));

export default function Courses(props) {
    //const [spacing, setSpacing] = React.useState(2);
    const [courses, setCourses] = React.useState([]),
        // classes = useStyles(),
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

        <div className="AubidaStyle">
            {
                courses.map((value) => (
                    <CourseCard setCourse={func} course={value} />
                ))
            }
        </div>

    );
}