import React, { useState, useEffect } from 'react';
import QuickGallery from './Galleries/QuickGallery';
import ContactForm from './ContactForm';
import FBContainer from './FBContainer';
import TPaisSticky from './TPaisSticky';

export default function Main() {
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
            <QuickGallery />
            {
                pageSize && (pageSize.width < 1844 || pageSize.height < 738) &&
                <>
                    <hr className="hr hr_margins" />
                    <center>
                        <FBContainer />
                    </center>
                </>
            }
            <hr className="hr hr_margins" />
            <TPaisSticky />
            <ContactForm />
        </>
    );
}