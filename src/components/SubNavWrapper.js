import React, { useState, useEffect, useRef } from 'react';
import Menu from './Menu';
import News from './News';
import FBContainer from './FBContainer';
import { menuWidth } from '../Constants';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
        width: 'min-content',
        margin: '0 auto',
        minHeight: 640
	}
}));

export default function SubNavWrapper(props) {
    const classes = useStyles(),
    [pageSize, setPageSize] = useState(null),
    ref = useRef(null);

    useEffect(() => {
        function handleResize() {
            setPageSize({width: window.innerWidth, height: window.innerHeight});
            if (ref.current !== null) {
                const width = ref.current.clientWidth + 'px';
                const toolbarWidth = document.getElementById('toolbar');
                if (width !== toolbarWidth.style.width) {
                    menuWidth.width = width;
                    toolbarWidth.style.width = width;
                }
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [ref]);

    return (
        <div ref={ref} className={classes.root}>
            <Menu />
            {
                pageSize && pageSize.width >= 1844 && pageSize.height >= 738 &&
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