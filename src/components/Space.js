import React from 'react';
import SpaceQuickGallery from './Galleries/SpaceQuickGallery';
import ContactForm from './ContactForm';

export default function Space() {
    return (
        <>
            <SpaceQuickGallery />
            <hr className="hr" style={{marginBottom: 15}} />
            <ContactForm />
        </>
    );
}