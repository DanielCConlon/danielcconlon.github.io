import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProjectCard(props) {

    const project = props.project

    return (
        <Card style={{ width: '18rem' }} key={project.name}>
            <Card.Img variant="top" src={project.src} className="mx-1" />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.github} target="_blank" rel="noreferrer"><Button variant="dark">GitHub Repo</Button></a>
                <a href={project.livesite} target="_blank" rel="noreferrer"><Button variant="dark">Live Site</Button></a>
            </Card.Body>
        </Card>
    );
}
