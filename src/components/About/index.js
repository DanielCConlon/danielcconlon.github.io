import React from 'react';
import profilePic from '../../utils/images/profilepic.jpg';

function About() {
    return (
        <section>
            <h1 id='about'>About Me</h1>
            <div id='about-info'>
                <img src={profilePic} className='' id='profile-pic' alt='Profile pic' />
            </div>
        </section>
    );
}

export default About;