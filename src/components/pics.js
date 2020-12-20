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

const images = [
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

  let shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

let shuffled = shuffleArray(images)

let pics = { images, shuffled }

export default pics