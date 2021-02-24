import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export default function ExperimentInfo(props) {
    const history = useHistory();
    const item = props.eInfo;
    const [err, setErr] = useState(0);
    if (!item)
        return (<Redirect to="/space/experiments" />);

    return (
        <div style={{textAlign: 'right'}}>
            <h3>{item.name}</h3>
            <iframe title="experiment" width="560" height="315" src={item.img} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>{item.longDescription}</p>
            <Button onClick={() => history.push('/tpais/experiments')} size="small" color="primary">
            <i class="far fa-arrow-alt-circle-right"></i>
			</Button>
        </div>
    );
}