import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            description: `This repo is building a coding quiz that uses local storage to save your score for all of the attempts. It also uses 2 HTML pages, one for highscores and index.html. Index.html is the main file that hold the first page, highscores holds all of the scores saved from local storage, if you click clear it will wipe all of the localstorage.`,
            src: require('../../utils/images/code-quiz.PNG'),
            github: 'https://github.com/DanielCConlon/code-quiz',
            livesite: 'https://danielcconlon.github.io/code-quiz/'
        }
    ]

    return (
        <section>
            {Projects.map((project) => (
                <Card style={{ width: '18rem' }} key={project.name}>
                    <Card.Img variant="top" src={project.src} className="img-thumbnail mx-1" />
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <a href={project.github} target="_blank" rel="noreferrer"><Button variant="dark">GitHub Repo</Button></a>
                        <a href={project.livesite} target="_blank" rel="noreferrer"><Button variant="dark">Live Site</Button></a>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Portfolio;