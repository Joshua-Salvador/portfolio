import React from 'react'
import './Project.css'

function Project({title, type, githubRepo, deployLink, image}) {
  return (
    <div className='project'>
      <h1 className='project__title'>{title}</h1>
      <img className='project__image' src={image} alt={type}/>
      {githubRepo.map((repo, i) => (<a key={i} className='project__link' href={repo} target='_blank' rel="noopener noreferrer">{type === 'tuts' ? 'Tutorial Link' : i === 0 && githubRepo[1] !== undefined ? 'Frontend Repo' : i === 0 && githubRepo[1] === undefined ? 'Github' : 'Backend Repo'}</a>))}
      <a className='project__link' href={deployLink} target='_blank' rel="noopener noreferrer">Deployed</a>
    </div>
  )
}

export default Project
