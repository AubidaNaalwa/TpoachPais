import React, { useState, useEffect } from 'react';
import QuickGallery from './Galleries/QuickGallery';
import ContactForm from './ContactForm';
import Sticky from './Sticky/Sticky';
import TPaisNews from './News/TPaisNews';


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
            <hr className="hr hr_margins" />
            <TPaisNews/>
            <hr className="hr hr_margins" />
            <Sticky />
            <hr className="hr hr_margins" />
            <ContactForm />

        </>
    );
}