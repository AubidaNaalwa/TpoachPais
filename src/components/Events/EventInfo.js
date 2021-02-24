import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';

export default function EventInfo(props) {

    const history = useHistory();
    const item = props.eInfo;
    const [err, setErr] = useState(0);

    if (!item)
        return (<Redirect to="/tpais/events" />);

    return (
        <div style={{ textAlign: 'right' }}>
            <h1>{item.name}</h1>
            <h3 className='eDate'>{<Moment format="YYYY/MM/DD">
                {item.date}
            </Moment>}</h3>
            <img src={!err ? item.img : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"} alt='img' style={{ width: '80%', height: '75%' }} onError={() => setErr(1)} ></img>
            <div>{item.longDescription}</div>
            <Button onClick={() => window.location.pathname === '/tpais/events/eventinfo' ? history.push('/tpais/events') : history.push('/space/events')} size="small" color="primary">
                <i class="far fa-arrow-alt-circle-right"></i>
            </Button>
        </div>
    );
}