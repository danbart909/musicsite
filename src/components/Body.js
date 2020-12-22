import React, { Component } from 'react'
import pics from './pics.js'
import InfiniteScroll from 'react-infinite-scroll-component'
// import $ from 'jquery'

export default class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      share: false,
      view: false,
      img: null,
      items: pics.shuffled3
    }
  }

  shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  openModal = (x) => {
    this.setState({ view: true, img: x.target.currentSrc });
    document.body.style.overflow = 'hidden';
  }
  
  closeModal = () => {
    this.setState({ view: false, img: null, share: false });
    document.body.style.overflow = 'unset';
  }

  toggleShare = (e) => {
    e.stopPropagation()
    this.setState({ share: !this.state.share })
  }

  closeShare = (e) => {
    e.stopPropagation()
    return this.state.share ? this.setState({ share: false }) : null
  }

  esc = (e) => {
    if (e.keyCode === 27) {
      return this.state.view ? this.setState({ view: false }) : null
    }
  }

  halt = (e) => {
    e.stopPropagation()
  }

  fetchMoreData = () => {
    this.setState({ items: this.state.items.concat(this.shuffleArray(pics.images1)) })
  }

  componentDidMount() {
    document.addEventListener("keydown", this.esc, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.esc, false);
  }

  // console = () => {
  //   new Promise(() => {
  //     setTimeout(() => {
  //       console.log(this.state, this.props);
  //     }, 5);
  //   })
  // }

  render() {

    // $(document).ready(function(){

    // });

    let modalShareClass = 'modal-share-closed'
    if (this.state.share === true) {
      modalShareClass = 'modal-share-open';
    }

    return (
      <div id='body-container'>

      {/* <button onClick={this.console}>.</button> */}

      { this.state.view && <div className='overlay' onClick={this.closeModal}>
        <div className='modal'>
          <div className='modal-header'>
            <div className={modalShareClass} onClick={(e) => this.toggleShare(e)}>
              <span>SHARE</span>
              { this.state.share && <div className='share-menu' onClick={(e) => this.halt(e)}>
                <div className='share-facebook'><i class="fab fa-facebook-f"/></div>
                <div className='share-twitter'><i class="fab fa-twitter"/></div>
                <div className='share-instagram'><i class="fab fa-instagram"/></div>
              </div> }
            </div>
            <div className='modal-close'>
              <span>X</span>
            </div>
          </div>
          <img src={this.state.img} alt="lookin good" onClick={(e) => this.closeShare(e)}/>
        </div>
      </div> }

      { this.props.state.music && <div className='overlay' onClick={this.props.closeNavModal}>
        <div className='nav-modal' onClick={(e) => {this.halt(e)}}>
          <span>MUSIC</span>
        </div>
      </div> }

      { this.props.state.newsletter && <div className='overlay' onClick={this.props.closeNavModal}>
        <div className='nav-modal' onClick={(e) => {this.halt(e)}}>
          <span>NEWSLETTER</span>
        </div>
      </div> }

      { this.props.state.contact && <div className='overlay' onClick={this.props.closeNavModal}>
        <div className='nav-modal' onClick={(e) => {this.halt(e)}}>
          <span>CONTACT</span>
        </div>
      </div> }

      { this.props.state.tourdates && <div className='overlay' onClick={this.props.closeNavModal}>
        <div className='nav-modal' onClick={(e) => {this.halt(e)}}>
          <span>TOUR DATES</span>
        </div>
      </div> }

        <InfiniteScroll
          className='infinitescroll'
          overlayClassName='infinitescroll-overlay'
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          scrollThreshold={0.9}
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