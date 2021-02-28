import React from 'react';
import SpaceEvent from './Sticky/SpaceEvent';
import SpaceCourse from './Sticky/SpaceCourse';
import SpaceExperiment from './Sticky/SpaceExperiment';
import { API_PATH } from '../Constants';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function SpaceSticky() {
    const [events, setEvents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [experiments, setExperiments] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            let news;
            news = await axios.get(`${API_PATH}/space/news`);
            setEvents(news.data.events);
            setCourses(news.data.courses);
            setExperiments(news.data.experiments);
        }
        fetchEvents();
    }, []);

    return (
        <div>
            <h1 className="spaceSticky"> احداث المركز</h1>
            <div className="feeds">
                {events.map(e => <SpaceEvent event={e} key={e._id} />)}
            </div>
            <h1 className="spaceSticky"> نشاطات ودورات</h1>
            <div className="feeds">
                {courses.map(c => <SpaceCourse course={c} key={c._id} />)}
            </div>
            <h1 className="spaceSticky"> تجارب ومُحاكاة</h1>
            <div className="feeds">
                {experiments.map(e => <SpaceExperiment experiment={e} key={e._id} />)}
            </div>
        </div>
    );
}