import React, { Component } from 'react'
import logo from '../images/logo.jpeg'

export default class Nav extends Component {
  render() {
    return (
      <div id='nav-container'>
        <div id='banner'>
          <div id='banner-left'>
            <div className='nav-item' id='facebook'>
              <div className='logo' id='facebook-logo'><i class="fab fa-facebook-f"></i></div>
              <div className='title' id='facebook-title'>FACEBOOK</div>
            </div>
            <div className='nav-item' id='twitter'>
              <div className='logo' id='twitter-logo'><i class="fab fa-twitter"></i></div>
              <div className='title' id='twitter-title'>TWITTER</div>
            </div>
            <div className='nav-item' id='instagram'>
              <div className='logo' id='instagram-logo'><i class="fab fa-instagram"></i></div>
              <div className='title' id='instagram-title'>INSTAGRAM</div>
            </div>
            <div className='nav-item' id='youtube'>
              <div className='logo' id='youtube-logo'><i class="fab fa-youtube"></i></div>
              <div className='title' id='youtube-title'>YOUTUBE</div>
            </div>
          </div>
          <div id='main-logo'>
            <img src={logo} alt='logo'/>
          </div>
          <div id='banner-right'>
            <div className='nav-item' id='music'>
              <div className='logo' id='music-logo'><i class="fas fa-headphones"></i></div>
              <div className='title' id='music-title'>MUSIC</div>
            </div>
            <div className='nav-item' id='newsletter'>
              <div className='logo' id='newsletter-logo'><i class="fas fa-envelope"></i></div>
              <div className='title' id='newsletter-title'>NEWSLETTER</div>
            </div>
            <div className='nav-item' id='contact'>
              <div className='logo' id='contact-logo'><i class="fas fa-at"></i></div>
              <div className='title' id='contact-title'>CONTACT</div>
            </div>
            <div className='nav-item' id='tour-dates'>
              <div className='logo' id='tour-logo'><i class="fas fa-ticket-alt"></i></div>
              <div className='title' id='tour-title'>TOUR DATES</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}