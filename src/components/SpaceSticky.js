import React, { useEffect, useState } from 'react';
import SpaceEvent from './Sticky/SpaceEvent';
import SpaceCourse from './Sticky/SpaceCourse';
import SpaceExperiment from './Sticky/SpaceExperiment';
import { API_PATH } from '../Constants';
import axios from 'axios';

export default function SpaceSticky() {
    const [events, setEvents] = useState([]),
    [courses, setCourses] = useState([]),
    [experiments, setExperiments] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            let sticky = await axios.get(`${API_PATH}/space/sticky`);
            setEvents(sticky.data.events);
            setCourses(sticky.data.courses);
            setExperiments(sticky.data.experiments);
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