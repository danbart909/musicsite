import React, { Component } from 'react'
import logo_icon from '../images/logo_icon.png'
import $ from 'jquery';

export default class NavMobile extends Component {

  render() {

    $(document).ready(function () {

      $('#bars').click(function() {
        $('#mobile-banner-menu').css('display', 'inline')
        $('#times').css('display', 'inline')
        $('#bars').css('display', 'none')
      })

      $('#times, .menu-item').click(function() {
        $('#mobile-banner-menu').css('display', 'none')
        $('#times').css('display', 'none')
        $('#bars').css('display', 'inline')
      })

    })

    return (
      <div id='nav-mobile-container'>
        <div id='mobile-banner'>
          <div id='mobile-menu'><i className="fas fa-bars" id='bars'/><i className="fas fa-times" id='times'/></div>
          <div id='mobile-main-logo'>
            <img src={logo_icon} alt='logo'/>
          </div>
          <div id='mobile-spacer'><i className="fas fa-plus"/></div>
        </div>
        <div id='mobile-banner-menu'>
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
            <div className='menu-item' onClick={() => {this.props.openMusic()}}>
              <i class="fas fa-headphones"/>
              <span>MUSIC</span>
            </div>
            <div className='menu-item' onClick={() => {this.props.openNewsletter()}}>
              <i class="fas fa-envelope"/>
              <span>NEWSLETTER</span>
            </div>
            <div className='menu-item' onClick={() => {this.props.openContact()}}>
              <i class="fas fa-at"/>
              <span>CONTACT</span>
            </div>
            <div className='menu-item' onClick={() => {this.props.openTourDates()}}>
              <i class="fas fa-ticket-alt"/>
              <span>TOUR DATES</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}