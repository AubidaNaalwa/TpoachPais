import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TPaisMenu from './TPaisMenu';
import SpaceMenu from './SpaceMenu';
import News from './News';

export default function SubNavWrapper(props) {
    const location = useLocation();

    const hideShowNews = function() {
        //TODO show hide
        //document.documentElement.clientWidth >= 1680 && document.documentElement.clientWidth >= 1048 && <News />
    }

    useEffect(() => {
        //TODO news show hide
    });

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