import React from "react";
import ProjectCard from "../ProjectCard";
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/esm/Col";
import './index.css';
import Skills from "../Skills";

function Portfolio() {

    const Projects = [
        {
            name: 'Concert Finder',
            description: 'Allow users to search an artist to see upcoming concerts and albums they have worked on.',
            src: require('../../utils/images/concert-finder.PNG'),
            github: 'https://github.com/DanielCConlon/concert-finder',
            livesite: 'https://danielcconlon.github.io/concert-finder/'
        },

        {
            name: 'Travel Blog',
            description: 'Allows users to write about their experiences and read about other users vacations and explorations.',
            src: require('../../utils/images/travel-blog.png'),
            github: 'https://github.com/gilinamcbride/travel-blog',
            livesite: 'https://sheltered-cliffs-36049.herokuapp.com/'
        },

        {
            name: 'Carbon Footprint',
            description: "This application is for an enviromentally-conscious user who wants to calculate their carbon footprint and learn more about how to offset it in order to positively impact the world's climate.",
            src: require('../../utils/images/CarbonFootprint.png'),
            github: 'https://github.com/nmsiegel1/carbon-footprint',
            livesite: 'https://carbon-footsteps.herokuapp.com/'
        },

        {
            name: 'Tech Blog',
            description: 'CMS-style blog site where you can publish articles, blog posts, and thoughts and opinions.',
            src: require('../../utils/images/tech-blog.PNG'),
            github: 'https://github.com/DanielCConlon/tech-blog',
            livesite: 'https://safe-gorge-07664.herokuapp.com/'
        },

        {
            name: 'Social Network API',
            description: 'Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM',
            src: require('../../utils/images/social-network-api.PNG'),
            github: 'https://github.com/DanielCConlon/social-network-api',
            livesite: ''
        },

        {
            name: 'Weather Dashboard',
            description: "This weather dashboard shows you the current day's weather as well as the weather for the upcoming week. ",
            src: require('../../utils/images/weather-dashboard.PNG'),
            github: 'https://github.com/DanielCConlon/weather-dashboard',
            livesite: 'https://danielcconlon.github.io/weather-dashboard/'
        },

        {
            name: 'Code Quiz',
            description: `This repo is building a coding quiz that uses local storage to save your score for all of the attempts. Index.html is the main file that hold the first page, highscores holds all of the scores saved from local storage, if you click clear it will wipe all of the localstorage.`,
            src: require('../../utils/images/code-quiz.PNG'),
            github: 'https://github.com/DanielCConlon/code-quiz',
            livesite: 'https://danielcconlon.github.io/code-quiz/'
        }
    ]

    return(
        <section id="projectContainer">
            <h2>Portfolio</h2>
            <Row>
                {Projects.map((project) => (
                    <Col sm='6' lg='4'>
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
            <Skills></Skills>
        </section>
    );
}

export default Portfolio;