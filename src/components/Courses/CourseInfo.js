import React from 'react';
import PageNotFound from '../PageNotFound';

export default function CourseInfo(props) {
    const item = props.cInfo;

    return (
        item ?
        <div style={{ textAlign: 'right' }}>
            <h1>{item.name}</h1>
            <p>{item.longDescription}</p>
            <p>{item.available ? `للاشتراك والتسجيل :${item.courseLink}` : "الدورة غير متوفرة حاليا"}</p>
        </div>
        : <PageNotFound />
    );
}