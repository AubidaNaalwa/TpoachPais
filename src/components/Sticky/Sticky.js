import React, { useEffect, useState } from 'react';
import StickyEvent from './StickyEvent';
import StickyCourse from './StickyCourse';
import StickyExperiment from './StickyExperiment';
import { API_PATH } from '../../Constants';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { useLocation, Link } from 'react-router-dom';


export default function Sticky() {
    const [events, setEvents] = useState([]),
        [courses, setCourses] = useState([]),
        [experiments, setExperiments] = useState([]);


    const getSitePath = useLocation().pathname.includes('/space') ? "space" : "tpais";

    useEffect(() => {
        async function fetchEvents() {
            let sticky = await axios.get(`${API_PATH}/${getSitePath}/sticky`);
            setEvents(sticky.data.events);
            setCourses(sticky.data.courses);
            setExperiments(sticky.data.experiments);
        }
        fetchEvents();
    }, []);

    return (
        <div>
            <h1 className='stickyHeader'>Stickies</h1>

            <Grid container direction="row" justify="space-evenly" spacing={3}>
                {
                    events.map(e =>
                        <StickyEvent event={e} key={e._id} />
                    )
                }
                {
                    courses.map(c =>
                        <StickyCourse course={c} key={c._id} />
                    )
                }
                {
                    experiments.map(e =>
                        <StickyExperiment experiment={e} key={e._id} />
                    )
                }
            </Grid>

        </div>
    );
}