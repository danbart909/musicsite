import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ReactModal from 'react-modal';
import i000 from '../images/i000.jpeg'
import i001 from '../images/i001.jpeg'
import i002 from '../images/i002.jpeg'
import i003 from '../images/i003.jpeg'
import i004 from '../images/i004.jpeg'
import i005 from '../images/i005.jpeg'
import i006 from '../images/i006.jpeg'
import i007 from '../images/i007.jpeg'
import i008 from '../images/i008.jpeg'
import i009 from '../images/i009.jpeg'
import i010 from '../images/i010.jpeg'

export default class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      items: [
        i000,
        i001,
        i002,
        i003,
        i004,
        i005,
        i006,
        i007,
        i008,
        i009,
        i010
      ]
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
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

  fetchMoreData = () => {
    let newItems = this.shuffleArray(this.state.items)
    return this.setState({ items: this.state.items.concat(newItems) })
  }

  render() {
    return (
      <div id='body-container'>
      {/* <button onClick={() => {console.log(this.state)}}>.</button> */}
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={() => {this.fetchMoreData()}}
          hasMore={true}
          scrollThreshold={0.4}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((x, index) => (
            <div className='imgbox' key={index}>
              <img src={x} alt={index} onClick={() => {this.handleOpenModal()}}/>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="img box"
              >
                <img src={x} alt={index}/>
                <button onClick={this.handleCloseModal}>Close Modal</button>
              </ReactModal>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}