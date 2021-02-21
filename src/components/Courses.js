import React, { useEffect } from 'react';
import CourseCard from './courseCard';
import '../styles/AubidaStyle.css'
const axios = require('axios');

export default function Courses(props) {

    const [courses, setCourses] = React.useState([]);
    const func = props.setCourse;

    async function fetchCourses() {
        const res = await axios.get("/courses");
        setCourses(res.data.courses);
    }

    useEffect(() => { fetchCourses() }, [])

    return (

        <div className="AubidaStyle">
            {
                courses.map((value) => (
                    <CourseCard key={value.date} setCourse={func} course={value} />
                ))
            }
        </div>

    );
}