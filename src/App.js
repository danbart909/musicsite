import React, { Component } from 'react';
import Nav from './components/Nav.js';
import NavMobile from './components/NavMobile.js';
import Body from './components/Body.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      music: false,
      newsletter: false,
      contact: false,
      tourdates: false,
      navmenu: false
    }
  }

  openMusic = () => {
    this.setState({ music: true })
    document.body.style.overflow = 'hidden';
  }

  openNewsletter = () => {
    this.setState({ newsletter: true })
    document.body.style.overflow = 'hidden';
  }

  openContact = () => {
    this.setState({ contact: true })
    document.body.style.overflow = 'hidden';
  }

  openTourDates = () => {
    this.setState({ tourdates: true })
    document.body.style.overflow = 'hidden';
  }

  closeNavModal = () => {
    this.setState({ music: false, newsletter: false, contact: false, tourdates: false })
    document.body.style.overflow = 'unset';
  }

  openNavMenu = (e) => {
    e.stopPropagation()
    this.setState({ navmenu: true })
  }

  closeNavMenu = () => {
    this.setState({ navmenu: false })
  }

  render() {
    return (
      <div id='overlord' onClick={this.closeNavMenu}>
        <Nav
          openMusic={this.openMusic}
          openNewsletter={this.openNewsletter}
          openContact={this.openContact}
          openTourDates={this.openTourDates}
        />
        <NavMobile
          openMusic={this.openMusic}
          openNewsletter={this.openNewsletter}
          openContact={this.openContact}
          openTourDates={this.openTourDates}
          openNavMenu={(e) => {this.openNavMenu(e)}}
          state={this.state}
        />
        <Body
          state={this.state}
          closeNavModal={this.closeNavModal}
        />
      </div>
    )
  }
}