import React from "react";
import profilePic from "../../utils/images/profilepic.jpg";

function About () {
    return (
        <section id="about">
            <div>
                <h1>About Me</h1>
            </div>

            <div id="about-info">
                <img src={profilePic} alt="Profile pic" />
                <p>
                    Full-Stack web developer leveraging MIS background to build a more intuitive user
                    experience on the web. Recently earned a certificate in full stack development from 
                    the University of North Carolina Chapel Hill Coding Bootcamp, with newly developed skills 
                    in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver 
                    passionate about developing apps, with a focus on mobile-first design and development. With each 
                    project, my aim is to best engage my audience for an impactful user experience. I applied aspects 
                    of UX and agile development in a recent project. I worked on a team of four to develop a 
                    concert-finder website that allows users to type in an artist and see the artists upcoming . 
                    I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better 
                    experiences on the web.
                </p>
            </div>

        </section>
    );
}


export default About;