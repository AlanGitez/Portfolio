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
          <TiSocialGithubCircular className='btn' />
          <TiSocialLinkedinCircular className='btn' />
        </div>
        <BurgerMenu />
        <Menu isMouseLeave={hoverController.isMouseLeave} />
      </header>
    </>
  )
}
