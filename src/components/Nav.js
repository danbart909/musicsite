import React, { Component } from 'react'
import logo from '../images/logo.png'

export default class Nav extends Component {
  render() {
    return (
      <div id='nav-container'>
        <div id='banner'>
          <div id='banner-left'>
            <div className='nav-item' id='facebook'>
              <div className='logo' id='facebook-logo'><i className="fab fa-facebook-f"/></div>
              <div className='title' id='facebook-title'>FACEBOOK</div>
            </div>
            <div className='nav-item' id='twitter'>
              <div className='logo' id='twitter-logo'><i className="fab fa-twitter"/></div>
              <div className='title' id='twitter-title'>TWITTER</div>
            </div>
            <div className='nav-item' id='instagram'>
              <div className='logo' id='instagram-logo'><i className="fab fa-instagram"/></div>
              <div className='title' id='instagram-title'>INSTAGRAM</div>
            </div>
            <div className='nav-item' id='youtube'>
              <div className='logo' id='youtube-logo'><i className="fab fa-youtube"/></div>
              <div className='title' id='youtube-title'>YOUTUBE</div>
            </div>
          </div>
          <div id='main-logo'>
            <img src={logo} alt='logo'/>
          </div>
          <div id='banner-right'>
            <div className='nav-item' id='music' onClick={() => {this.props.openMusic()}}>
              <div className='logo' id='music-logo'><i className="fas fa-headphones"/></div>
              <div className='title' id='music-title'>MUSIC</div>
            </div>
            <div className='nav-item' id='newsletter' onClick={() => {this.props.openNewsletter()}}>
              <div className='logo' id='newsletter-logo'><i className="fas fa-envelope"/></div>
              <div className='title' id='newsletter-title'>NEWSLETTER</div>
            </div>
            <div className='nav-item' id='contact' onClick={() => {this.props.openContact()}}>
              <div className='logo' id='contact-logo'><i className="fas fa-at"/></div>
              <div className='title' id='contact-title'>CONTACT</div>
            </div>
            <div className='nav-item' id='tour-dates' onClick={() => {this.props.openTourDates()}}>
              <div className='logo' id='tour-logo'><i className="fas fa-ticket-alt"/></div>
              <div className='title' id='tour-title'>TOUR DATES</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}