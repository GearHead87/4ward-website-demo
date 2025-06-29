import React from 'react';
import ContactHero from '@/components/shared/contact/ContactHero';
import ContactTeam from '@/components/shared/contact/ContactTeam';
import ContactFooter from '@/components/shared/contact/ContactFooter';

const Contact = () => {
    return (
        <div className="bg-black min-h-screen">
            {/* Contact Hero Section */}
            <ContactHero />
            
            {/* Contact Team Section */}
            <ContactTeam />
            
            {/* Contact Footer Section */}
            <ContactFooter />
        </div>
    );
};

export default Contact;