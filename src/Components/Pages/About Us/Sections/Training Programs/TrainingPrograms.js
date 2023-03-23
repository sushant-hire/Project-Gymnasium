import React from 'react'
import "./TrainingPrograms.css";

const TrainingPrograms = () => {
    return (
        <section className='TrainingProgramsContainer' style={{ backgroundColor: 'black' }} id='trainingprograms'>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ height: 'auto', maxWidth: '52%', opacity: '50%', backgroundSize: 'contain', marginLeft: '23%' }} src="http://cdn.shopify.com/s/files/1/0032/5736/8611/articles/Evogen-Cheat-Your-Way-to-More-Muscle-Growth_-1200x1200.jpg?v=1663292582" class="d-block w-100" alt="..." />
                        <div className='BodyBuildingHeading' class="carousel-caption">
                            <h1 style={{ color: 'red', fontSize: '90px', fontWeight: 'bolder' }}>Body Building</h1>
                            <p style={{ color: 'red', fontSize: '30px', fontWeight: 'bold' }}>Training Program #1</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{ height: 'auto', maxWidth: '52%', opacity: '50%', backgroundSize: 'contain', marginLeft: '23%' }} src="https://hips.hearstapps.com/hmg-prod/images/yoga-instructor-with-hands-clasped-teaching-class-royalty-free-image-1640283113.jpg?crop=0.6673xw:1xh;center,top&resize=1200:*" class="d-block w-100" alt="..." />
                        <div className='BodyBuildingHeading' class="carousel-caption">
                            <h1 style={{ color: 'red', fontSize: '90px', fontWeight: 'bolder' }}>Meditation</h1>
                            <p style={{ color: 'red', fontSize: '30px', fontWeight: 'bold' }}>Training Program #2</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{ height: 'auto', maxWidth: '52%', opacity: '50%', backgroundSize: 'contain', marginLeft: '23%' }} src="https://images.theconversation.com/files/349144/original/file-20200723-15-m1qpe7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" class="d-block w-100" alt="..." />
                        <div className='BodyBuildingHeading' class="carousel-caption">
                            <h1 style={{ color: 'red', fontSize: '90px', fontWeight: 'bolder' }}>Aerobics</h1>
                            <p style={{ color: 'red', fontSize: '30px', fontWeight: 'bold' }}>Training Program #3</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default TrainingPrograms