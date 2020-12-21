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

      $('#times').click(function() {
        $('#mobile-banner-menu').css('display', 'none')
        $('#times').css('display', 'none')
        $('#bars').css('display', 'inline')
      })

    })

    return (
      <div id='nav-mobile-container'>
        <div id='mobile-banner'>
          <div id='mobile-menu'><i className="fas fa-bars" id='bars'></i><i className="fas fa-times" id='times'></i></div>
          <div id='mobile-main-logo'>
            <img src={logo_icon} alt='logo'/>
          </div>
          <div id='mobile-spacer'><i className="fas fa-plus"></i></div>
        </div>
        <div id='mobile-banner-menu'>
          <div id='sidebar'>
            <a className='menu-item' href='/'>
              <i class="fab fa-facebook-f"></i>
              <span>FACEBOOK</span>
            </a>
            <a className='menu-item' href='/'>
              <i class="fab fa-twitter"></i>
              <span>TWITTER</span>
            </a>
            <a className='menu-item' href='/'>
              <i class="fab fa-instagram"></i>
              <span>INSTAGRAM</span>
            </a>
            <a className='menu-item' href='/'>
              <i class="fab fa-youtube"></i>
              <span>YOUTUBE</span>
            </a>
            <a className='menu-item' href='/'>
              <i class="fas fa-headphones"></i>
              <span>MUSIC</span>
            </a>
            <a className='menu-item' href='/'>
              <i class="fas fa-envelope"></i>
              <span>NEWSLETTER</span>
            </a>
            <a className='menu-item' href='/'>
              <i class="fas fa-at"></i>
              <span>CONTACT</span>
            </a>
            <a className='menu-item' href='/'>
              <i class="fas fa-ticket-alt"></i>
              <span>TOUR DATES</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}