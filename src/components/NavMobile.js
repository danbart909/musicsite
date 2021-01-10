import React, { Component } from 'react'
// import logo_icon from '../images/logo_icon.png'
import logo from '../images/logo.png'

export default class NavMobile extends Component {
  render() {
    return (
      <div id='nav-mobile-container'>
        <div id='mobile-banner'>
          <div id='mobile-menu'>
            { !this.props.state.navmenu && <i className="fas fa-bars" id='bars' onClick={(e) => {this.props.openNavMenu(e)}}/> }
            { this.props.state.navmenu && <i className="fas fa-times" id='times'/> }
          </div>
          <div id='mobile-main-logo'>
            <img src={logo} alt='logo'/>
          </div>
          <div id='mobile-spacer'><i className="fas fa-plus"/></div>
        </div>
        { this.props.state.navmenu && <div id='mobile-banner-menu'>
          <div id='sidebar'>
            <a className='menu-item' href='/'>
              <i class="fab fa-facebook-f"/>
              <span>FACEBOOK</span>
            </a>
            <a className='menu-item' href='/'>
              <i class="fab fa-twitter"/>
              <span>TWITTER</span>
            </a>
            <a className='menu-item' href='/'>
              <i class="fab fa-instagram"/>
              <span>INSTAGRAM</span>
            </a>
            <a className='menu-item' href='/'>
              <i class="fab fa-youtube"/>
              <span>YOUTUBE</span>
            </a>
            <div className='menu-item' onClick={this.props.openMusic}>
              <i class="fas fa-headphones"/>
              <span>MUSIC</span>
            </div>
            <div className='menu-item' onClick={this.props.openNewsletter}>
              <i class="fas fa-envelope"/>
              <span>NEWSLETTER</span>
            </div>
            <div className='menu-item' onClick={this.props.openContact}>
              <i class="fas fa-at"/>
              <span>CONTACT</span>
            </div>
            <div className='menu-item' onClick={this.props.openTourDates}>
              <i class="fas fa-ticket-alt"/>
              <span>TOUR DATES</span>
            </div>
          </div>
        </div> }
      </div>
    )
  }
}