import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export default function CourseInfo(props) {
    const history = useHistory(),
    item = props.cInfo,
    [err, setErr] = useState(0);

    if (!item)
        return (<Redirect to="/tpais/courses" />);

    return (
        <div style={{ textAlign: 'right' }}>
            <h1>{item.name}</h1>
            <img src={!err ? item.img : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"} alt='img' style={{ width: '80%', height: '75%' }} onError={() => setErr(1)} ></img>
            <p>{item.longDescription}</p>
            <p>{item.available ? `للاشتراك والتسجيل :${item.courseLink}` : "الدورة غير متوفرة حاليا"}</p>
            <Button onClick={() => window.location.pathname === '/tpais/courses/courseinfo' ? history.push('/tpais/courses') : history.push('/space/courses')} size="small" color="primary">
            <i class="far fa-arrow-alt-circle-right"></i>
			</Button>
        </div>
    );
}