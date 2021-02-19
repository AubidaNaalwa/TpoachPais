import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import Grid from "@material-ui/core/Grid";

const Events = () => {
    const [eventsList, setEventsList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const eventsList = await axios.get(`/events`);
            setEventsList(eventsList.data.events);
        }
        fetchData();
    }, []);

    return (
        <div className="content" style={{marginTop: '5%'}}>
            <Grid container spacing={10}>
                {
                    eventsList.sort((a, b) => new Date(a.date) - new Date(b.date)).map(e => (
                    <Grid item xs={12} sm={4}>
                        <EventCard event={e} key={e._id} />
                    </Grid>))
                }
            </Grid>
        </div>
    );
};

export default Events;