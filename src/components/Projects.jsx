import React from 'react'
import './Projects.css'
import Project from './Project'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import foogle from './images/foogle.png'
import chicken from './images/Chicken.png'
import hotel from './images/Hotel.png'
import chart from './images/chart.png'
import chikapp from './images/chikapp.png'
import tinder from './images/tinder.png'
import amazon from './images/amazon.png'

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
      githubRepo: ['https://github.com/Joshua-Salvador/charts-react', 'https://github.com/Joshua-Salvador/charts-react-backend'],
      deployLink: ['https://chart-js-project.web.app/'],
      image: chart
    },
    {
      title: 'Chikapp Project',
      type: 'mern',
      githubRepo: ['https://github.com/Joshua-Salvador/chikapp-frontend', 'https://github.com/Joshua-Salvador/chikapp-backend'],
      deployLink: ['https://chikapp-project.web.app/'],
      image: chikapp
    },
    {
      title: 'Tinder Clone',
      type: 'tuts',
      githubRepo: ['https://www.youtube.com/watch?v=ktjafK4SgWM'],
      deployLink: ['https://tinder-frontend-clone-jebs.web.app/'],
      image: tinder
    },
    {
      title: 'Amazon Clone',
      type: 'tuts',
      githubRepo: ['https://www.youtube.com/watch?v=RDV3Z1KCBvo'],
      deployLink: ['https://clone-20ae9.web.app/'],
      image: amazon
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
              <Col md={6} lg={6} key={filteredProject.title} >
                <Project 
                  title={filteredProject.title} 
                  type={filteredProject.type}
                  githubRepo={filteredProject.githubRepo}
                  deployLink={filteredProject.deployLink}
                  image={filteredProject.image} />
              </Col>))}
        </Row>
        <h1>MERN Stack Projects</h1>
        <Row className="project__set projects__mern">
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
        <h1>Projects from tutorials and courses</h1>
        <Row className="project__set projects__tutorials">
          {projects
            .filter(project => project.type === 'tuts')
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
      </Container>
    </div>
  )
}

export default Projects
