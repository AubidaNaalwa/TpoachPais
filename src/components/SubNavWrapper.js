import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TPaisMenu from './TPaisMenu';
import SpaceMenu from './SpaceMenu';
import News from './News';

export default function SubNavWrapper(props) {
    const location = useLocation(),
    [width, setWidth] = useState(window.innerWidth),
    [height, setHeight] = useState(window.innerHeight);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    return (
        <div style={{width: 'min-content', margin: '0 auto'}}>
            { !location.pathname.includes('/space') ? <TPaisMenu /> : <SpaceMenu /> }
            { location.pathname.includes('/space') ? document.body.classList.add('space-theme', 'font') : document.body.classList.remove('space-theme', 'font') }
            { width >= 1680 && height >= 600 && <News /> }
            <div className="content">
                <hr className="hr" />
                {props.children}
            </div>
        </div>
    );
}