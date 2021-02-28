import React, { useState, useEffect } from 'react';
import SpaceQuickGallery from './Galleries/SpaceQuickGallery';
import ContactForm from './ContactForm';
import FBContainer from './FBContainer';
import SpaceSticky from './SpaceSticky';

export default function Space() {
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
        <>
            <SpaceQuickGallery />
            {
                pageSize && (pageSize.width < 1708 || pageSize.height < 738) &&
                <>
                    <hr className="hr hr_margins" />
                    <center>
                        <FBContainer />
                    </center>
                </>
            }
            <hr className="hr hr_margins" />
            <SpaceSticky />
            <ContactForm />
        </>
    );
}