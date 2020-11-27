import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div id='sidebar'>
        <a className='menu-item' href='/'>
          <span>Facebook</span>
        </a>
        <a className='menu-item' href='/'>
          <span>Twitter</span>
        </a>
        <a className='menu-item' href='/'>
          <span>Instagram</span>
        </a>
        <a className='menu-item' href='/'>
          <span>Youtube</span>
        </a>
        <a className='menu-item' href='/'>
          <span>Music</span>
        </a>
        <a className='menu-item' href='/'>
          <span>Newsletter</span>
        </a>
        <a className='menu-item' href='/'>
          <span>Contact</span>
        </a>
        <a className='menu-item' href='/'>
          <span>Tour Dates</span>
        </a>
      </div>
    )
  }
}
