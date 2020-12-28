import React from 'react'
import {NavLink, } from 'react-router-dom'
import "./SideBar.css"

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
      <img className='sidebar__image' src='./images/General_Use_Photo-removebg.png' alt='home-profile'/>
        <div className="sidebar__title">
          <h1>Joshua Enrick B. Salvador</h1>
        </div>
        <div className="sidebar__options">
          <NavLink to='/home' style={{textDecoration: 'none', color: '#a5def1'}}>
            <span className="sidebar__option">Home</span>
          </NavLink>
          {/* <NavLink to='/skills' style={{textDecoration: 'none', color: '#a5def1'}}>
            <span class='sidebar__option'>Skills</span>
          </NavLink> */}
          <NavLink to='/projects' style={{textDecoration: 'none', color: '#a5def1'}}>
            <span className="sidebar__option">Projects</span>
          </NavLink>
          <NavLink to='/contact' style={{textDecoration: 'none', color: '#a5def1'}}>
            <span className="sidebar__option">Contact</span>
          </NavLink>
        </div>
        <div className="sidebar__socmed">
          <LinkedInIcon className='sidebar__socmedOption'/>
          <TwitterIcon className='sidebar__socmedOption'/>
          <GitHubIcon className='sidebar__socmedOption'/>
        </div>
        <p className="sidebar__copyright">©Joshua Enrick B. Salvador 2020</p>
      </div>
    </div>
  )
}

export default SideBar
