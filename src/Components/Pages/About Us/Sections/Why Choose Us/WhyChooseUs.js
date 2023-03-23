import React from 'react'
import ReactPlayer from 'react-player'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    return (
        <section id='whychooseus' style={{backgroundColor: 'darkred'}} className='WhyChooseUsContainer'>
            <div className='WhyChooseUsContent'>
                <h1 style={{ color: 'red', fontWeight: 'bold' }}>Why Choose Us?</h1>
                <br/>
                <ul  style={{ color: 'white', fontSize: '18px' }}>
                    <li >Consultations With Experts</li>
                </ul>
                <p style={{ color: 'white' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <br/>
                
                <ul  style={{ color: 'white', fontSize: '18px' }}>
                    <li>Best Workout Facilities All Across</li>
                </ul>
                <p style={{ color: 'white' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className='WhyChooseUsYouTubeLink'>
                <ReactPlayer controls url={'https://youtu.be/jfobiCq0YUc'} />
            </div>
        </section>
    )
}

export default WhyChooseUs
