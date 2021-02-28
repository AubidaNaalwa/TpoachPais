import React, { useState, useEffect } from 'react';
import TPaisQuickGallery from './Galleries/TPaisQuickGallery';
import ContactForm from './ContactForm';
import FBContainer from './FBContainer';
import TPaisSticky from './TPaisSticky';

export default function TPais() {
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
            <TPaisQuickGallery />
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
            <TPaisSticky />
            <ContactForm />
        </>
    );
}