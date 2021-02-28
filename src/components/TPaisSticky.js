import React from 'react';
import TPaisEvent from './Sticky/TPaisEvent';
import TPaisCourse from './Sticky/TPaisCourse';
import TPaisExperiment from './Sticky/TPaisExperiment';
import { API_PATH } from '../Constants';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function TPaisSticky() {
    const [events, setEvents] = useState([]),
    [courses, setCourses] = useState([]),
    [experiments, setExperiments] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            let news;
            news = await axios.get(`${API_PATH}/tpais/news`);
            setEvents(news.data.events);
            setCourses(news.data.courses);
            setExperiments(news.data.experiments);
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