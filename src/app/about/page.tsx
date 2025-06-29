import React from 'react';
import WhoAreWe from '@/components/shared/home/WhoAreWe';
import CoreServices from '@/components/shared/home/CoreServices';
import DetailedServices from '@/components/shared/about/DetailedServices';
import FestivalOrganization from '@/components/shared/about/FestivalOrganization';
import Why4Ward from '@/components/shared/home/Why4Ward';
import CaseStudies from '@/components/shared/home/CaseStudies';
import Contact from '@/components/shared/home/Contact';

const About = () => {
    return (
        <div className="bg-black min-h-screen">
            {/* WHO ARE WE Section */}
            <WhoAreWe />
            
            {/* OUR CORE SERVICES Section */}
            <CoreServices />
            
            {/* Detailed Services Sections */}
            <DetailedServices />
            
            {/* Festival Organization Section */}
            <FestivalOrganization />
            
            {/* WHY 4WARD Section */}
            <Why4Ward />
            
            {/* Case Studies & Experience Section */}
            <CaseStudies />
            
            {/* Contact Section */}
            <Contact />
        </div>
    );
};

export default About;