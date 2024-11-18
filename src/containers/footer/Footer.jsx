import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='gpt3__footer section__padding'>
      <div className='gpt3__foooter-heading'>
        <h2 className='gradient__text'>
          Do you want to step into the <br /> future before others</h2>
      </div>

      <div className='gpt3__footer-btn'>
        <button>Request Early Access</button>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links__logo'>
          <img src={logo} alt='logo' />
          <p>Crechterwoord K12 182 DK <br />Alknjkcb, All rights reserved</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Links</h4>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Comapny</h4>
          <ul>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Get in touch</h4>
          <ul>
            <li>Crechterwoord K12 <br />182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer