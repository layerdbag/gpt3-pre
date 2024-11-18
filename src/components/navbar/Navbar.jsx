import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Menu = () => {
  return (
    <ul>
      <li><a href='#home'>Home</a></li>
      <li><a href='#wgpt3'>What is GPT?</a></li>
      <li><a href='#possibility'>Open AI</a></li>
      <li><a href='#features'>Case Studies</a></li>
      <li><a href='#blog'>Library</a></li>
    </ul>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <section className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={32} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={32} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu-links_container'>
              <Menu />
            </div>
            <div className='gpt3__navbar-menu-links_container-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Navbar
