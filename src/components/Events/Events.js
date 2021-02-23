import React from 'react';
import { useEffect, useState } from 'react';
import EventCard from './EventCard';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

export default function Events(props) {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            let events
            if (window.location.pathname === '/tpais/events') {
                events = await axios.get(`/events`);
            } else {
                events = await axios.get(`/space/events`);
            }
            setEvents(events.data.events);
        }
        fetchEvents();
    }, []);

    return (
        <Grid container direction="row" justify="space-between" spacing={3} style={{ marginTop: 15 }}>
            {
                events.sort((a, b) => new Date(a.date) - new Date(b.date)).map(e => (
                    <Grid item key={e._id}>
                        <EventCard setEvent={props.setEvent} event={e} />
                    </Grid>
                ))
            }
        </Grid>
    );
}