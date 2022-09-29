import React from 'react'
import BurgerMenu from './BurgerMenu'
import Menu from './Menu'
import { TiSocialGithubCircular, TiSocialLinkedinCircular } from "react-icons/ti"
import useHover from '../hooks/useHover'


export default function Navbar() {
  const hoverController = useHover();

  return (
    <>
      <header
        className="navbar"
        {...hoverController}>
        <div className="networks-container">
          <a href="https://github.com/AlanGitez" target={"_blank"}><TiSocialGithubCircular className='btn' style={{ color: "white" }} /></a>
          <a href="https://www.linkedin.com/in/benitez-alan/" target={"_blank"}><TiSocialLinkedinCircular className='btn' style={{ color: "white" }} /></a>
        </div>
        {/* <BurgerMenu /> */}
        <Menu isMouseLeave={hoverController.isMouseLeave} />
      </header>
    </>
  )
}
