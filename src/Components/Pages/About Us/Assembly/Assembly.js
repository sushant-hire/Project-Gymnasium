import React from 'react'
import AboutUs from '../Sections/About Us/AboutUs'
import WhyChooseUs from '../Sections/Why Choose Us/WhyChooseUs'
import TrainingPrograms from '../Sections/Training Programs/TrainingPrograms'
import MeetOurTeam from '../Sections/Meet Our Team/MeetOurTeam'
import Pricing from '../Sections/Pricing/Pricing'
import ContactUs from '../Sections/Contact Us/ContactUs'

const Assembly = () => {
    return (
        <div>
            <AboutUs />
            <br />
            <WhyChooseUs />
            <br />
            <TrainingPrograms />
            <br />
            <MeetOurTeam />
            <Pricing />
            <br />
            <ContactUs />
        </div>
    )
}

export default Assembly