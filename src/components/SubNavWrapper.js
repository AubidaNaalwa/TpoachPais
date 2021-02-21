import React from 'react';
import { useLocation } from 'react-router-dom';
import TPaisMenu from './TPaisMenu';
import SpaceMenu from './SpaceMenu';

export default function SubNavWrapper(props) {
    const location = useLocation();

    return (
        <div style={{width: 'min-content', margin: '0 auto'}}>
            { !location.pathname.includes('/space') ? <TPaisMenu /> : <SpaceMenu /> }
            <div className="content">
                <hr className="hr" />
                {props.children}
            </div>
        </div>
    );
}