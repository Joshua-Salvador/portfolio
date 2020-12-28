import React from 'react'
import './Projects.css'
import Project from './Project'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import foogle from './images/foogle.png'
import chicken from './images/Chicken.png'
import hotel from './images/Hotel.png'

function Projects() {
  const projects =[
    {
    title: 'Foogle: Search Recipe App',
    type: 'front-end',
    githubRepo: ['https://github.com/Joshua-Salvador/foogle'],
    deployLink: ['https://foogle-js.herokuapp.com'],
    image: foogle
    },
    {
      title: 'I Love Chicken',
      type: 'front-end',
      githubRepo: ['https://github.com/Joshua-Salvador/ilovechicken'],
      deployLink: ['https://joshua-salvador.github.io/ilovechicken/'],
      image: chicken
    },
    {
      title: 'Hotel Sample',
      type: 'front-end',
      githubRepo: ['https://github.com/Joshua-Salvador/hotelsample'],
      deployLink: ['https://joshua-salvador.github.io/hotelsample/'],
      image: hotel
    },
    {
      title: 'Chart-JS-Project',
      type: 'mern',
      githubRepo: ['https://github.com/Joshua-Salvador/charts-react', 'https://github.com/Joshua-Salvador/charts-react-backend']
    }
  ]
  return (
    <div className='projects'>
      <Container fluid='lg' className="projects__container">
        <h1>Front End Projects</h1>
        <Row className="project__set projects__frontend">
          {projects
            .filter(project => project.type === 'front-end')
            .map(filteredProject => (
              <Col key={filteredProject.title} md>
                <Project 
                  title={filteredProject.title} 
                  type={filteredProject.type}
                  githubRepo={filteredProject.githubRepo}
                  deployLink={filteredProject.deployLink}
                  image={filteredProject.image} />
              </Col>))}
        </Row>
        <Row className="project__set projects__mern">
          <h1>MERN Stack Projects</h1>
          <Row className="project__set projects__frontend">
          {projects
            .filter(project => project.type === 'mern')
            .map(filteredProject => (
              <Col key={filteredProject.title} md>
                <Project 
                  title={filteredProject.title} 
                  type={filteredProject.type}
                  githubRepo={filteredProject.githubRepo}
                  deployLink={filteredProject.deployLink}
                  image={filteredProject.image} />
              </Col>))}
        </Row>
        </Row>
        <Row className="project__set projects__react">
          <h1>React Projects</h1>
        </Row>
        <Row className="project__set projects__tutorials">
          <h1>Projects from tutorials and courses</h1>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
