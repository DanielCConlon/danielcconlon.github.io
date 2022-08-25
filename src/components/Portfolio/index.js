import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Portfolio() {

    const Projects = [
        {
            name: 'Concert Finder',
            description: 'Lorem Ipsum',
            src: require('../../utils/images/concert-finder.PNG'),
            github: 'https://github.com/DanielCConlon/concert-finder',
            livesite: 'https://danielcconlon.github.io/concert-finder/'
        },

        {
            name: 'Travel Blog',
            description: 'Lorem Ipsum',
            src: require('../../utils/images/travel-blog.png'),
            github: 'https://github.com/gilinamcbride/travel-blog',
            livesite: 'https://sheltered-cliffs-36049.herokuapp.com/'
        },

        {
            name: 'Tech Blog',
            description: 'Lorem Ipsum',
            src: require('../../utils/images/tech-blog.PNG'),
            github: 'https://github.com/DanielCConlon/tech-blog',
            livesite: 'https://safe-gorge-07664.herokuapp.com/'
        },

        {
            name: 'Social Network API',
            description: 'Lorem Ipsum',
            src: require('../../utils/images/social-network-api.PNG'),
            github: 'https://github.com/DanielCConlon/social-network-api',
            livesite: ''
        },

        {
            name: 'Weather Dashboard',
            description: 'Lorem Ipsum',
            src: require('../../utils/images/weather-dashboard.PNG'),
            github: 'https://github.com/DanielCConlon/weather-dashboard',
            livesite: 'https://danielcconlon.github.io/weather-dashboard/'
        },

        {
            name: 'Code Quiz',
            description: 'Lorem Ipsum',
            src: require('../../utils/images/code-quiz.PNG'),
            github: 'https://github.com/DanielCConlon/code-quiz',
            livesite: 'https://danielcconlon.github.io/code-quiz/'
        }
    ]

    return (
        <section>
            {Projects.map((project) => (
                <Card key={project.name}>
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