import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function LoadingSpinner() {
    return (
        <div style={{margin: '25% auto', textAlign: 'center'}}>
            <CircularProgress color="secondary"/>
        </div>
    );
}