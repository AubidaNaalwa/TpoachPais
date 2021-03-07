import React from 'react';
import Moment from 'react-moment';
import PageNotFound from '../PageNotFound';

export default function CourseInfo(props) {
    const item = props.cInfo;

    return (
        item ?
        <div style={{ textAlign: 'right' }}>
            <h1>{item.name}</h1>
            <h3 style={{ color: 'gray', marginTop: -20 }}><Moment format="YYYY/MM/DD">{item.date}</Moment></h3>
            <p>{item.longDescription}</p>
            <span>{item.available ? `للاشتراك والتسجيل :${item.courseLink}` : "التسجيل غير مُتاح حالياً"}</span>
        </div>
        : <PageNotFound />
    );
}