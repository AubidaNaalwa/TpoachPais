import React, { useEffect, useState } from 'react';
import TPaisEvent from './Sticky/TPaisEvent';
import TPaisCourse from './Sticky/TPaisCourse';
import TPaisExperiment from './Sticky/TPaisExperiment';
import { API_PATH } from '../Constants';
import axios from 'axios';

export default function TPaisSticky() {
    const [events, setEvents] = useState([]),
    [courses, setCourses] = useState([]),
    [experiments, setExperiments] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            let sticky = await axios.get(`${API_PATH}/tpais/sticky`);
            setEvents(sticky.data.events);
            setCourses(sticky.data.courses);
            setExperiments(sticky.data.experiments);
        }
        fetchEvents();
    }, []);

    return (
        <div>
            <h1 className="tpaisSticky"> احداث المركز</h1>
            <div className="feeds">
                {events.map(e => <TPaisEvent event={e} key={e._id} />)}
            </div>
            <h1 className="tpaisSticky"> نشاطات ودورات</h1>
            <div className="feeds">
                {courses.map(c => <TPaisCourse course={c} key={c._id} />)}
            </div>
            <h1 className="tpaisSticky"> تجارب ومُحاكاة</h1>
            <div className="feeds">
                {experiments.map(e => <TPaisExperiment experiment={e} key={e._id} />)}
            </div>
        </div>
    );
}