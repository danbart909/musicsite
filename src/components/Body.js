import React, { Component } from 'react'
import pics from './pics.js'
import InfiniteScroll from 'react-infinite-scroll-component'
import $ from 'jquery'

export default class Body extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      view: false,
      img: null,
      items: pics.shuffled
    }
  }

  openModal = (x) => {
    this.setState({ view: true, img: x.target.currentSrc });
    document.body.style.overflow = 'hidden';
  }
  
  closeModal = () => {
    this.setState({ view: false, img: null });
    document.body.style.overflow = 'unset';
  }

  esc = (e) => {
    if (e.keyCode === 27) {
      if (this.state.view === true) {this.setState({ view: false }) }
    }
  }

  halt = (e) => {
    e.stopPropagation();
  }

  fetchMoreData = () => {
    this.setState({ items: this.state.items.concat(pics.shuffled) })
  }

  componentDidMount() {
    document.addEventListener("keydown", this.esc, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.esc, false);
  }

  // console = () => {
  //   console.log(pics)
  // }

  render() {

    $(document).ready(function(){
      $(".modal img, .modal-share").click(function(e) {
        e.stopPropagation();
      });
    });

    return (
      <div id='body-container'>
      {/* <button onClick={this.console}>.</button> */}
      { this.state.view && <div className='overlay' onClick={this.closeModal}>
        <div className='modal'>
          <div className='modal-header'>
            <div className='modal-share'>SHARE</div>
            <div className='modal-close' onClick={this.closeModal}>X</div>
          </div>
          <img src={this.state.img} alt="lookin good"/>
        </div>
      </div> }
        <InfiniteScroll
          className='infinitescroll'
          overlayClassName='infinitescroll-overlay'
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          scrollThreshold={0.4}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((x, index) => (
            <div className='imgbox' key={index} onClick={(x) => {this.openModal(x)}}>
              <img src={x} alt={index}/>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}