import React from 'react';
import TPaisQuickGallery from './Galleries/TPaisQuickGallery';
import ContactForm from './ContactForm';

export default function TPais() {
    return (
        <>
            <TPaisQuickGallery />
            <hr className="hr" style={{marginBottom: 15, marginTop: 20}} />
            <ContactForm />
        </>
    );
}