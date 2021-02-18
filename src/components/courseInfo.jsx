import React, { useEffect, useState } from 'react';
import { Redirect  } from 'react-router-dom'
import '../styles/courseInfo.css'

export default function CourseInfo(props) {
    const item = props.cInfo
    
    if (!item) {
        return (<Redirect to="/tpais/courses"/>)
    }

    return (
        <div className="coursesInfo">
            <h1>{item.name}</h1>
            <img id='image' src='https://i.imgur.com/Sz6ZAx6.jpg'></img>
            <p>{item.longDescription}</p>
            <p>{item.availabaility}</p>
            <p>{item.date}</p>
            <p>{item.toDate}</p>
            <p>{item.courseLink}</p>
        </div>
    )
}