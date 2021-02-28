import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import News from './News';
import FBContainer from './FBContainer';

export default function SubNavWrapper(props) {
    const [pageSize, setPageSize] = useState(null);

    useEffect(() => {
        function handleResize() {
            setPageSize({width: window.innerWidth, height: window.innerHeight});
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{width: 'min-content', margin: '0 auto', minHeight: 640}}>
            <Menu />
            {
                pageSize && pageSize.width >= 1708 && pageSize.height >= 738 &&
                <>
                    <News />
                    <div className="fb_container">
                        <FBContainer />
                    </div>
                </>
            }
            <div className="content">
                <hr className="hr" />
                {props.children}
            </div>
        </div>
    );
}