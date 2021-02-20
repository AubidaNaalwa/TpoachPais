import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import '../../styles/AubidaStyle.css'

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
        <div className="AubidaStyle" style={{ marginTop: '5%' }}>

            {
                eventsList.sort((a, b) => new Date(a.date) - new Date(b.date)).map(e => (

                    <EventCard event={e} key={e._id} />
                ))
            }

        </div>
    );
};

export default Events;