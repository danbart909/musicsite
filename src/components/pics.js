import i000 from '../images/i000.jpeg'
import i001 from '../images/i001.jpeg'
import i002 from '../images/i002.jpeg'
import i003 from '../images/i003.jpeg'
import i004 from '../images/i004.jpeg'
import i005 from '../images/i005.jpeg'
import i006 from '../images/i006.jpeg'
import i007 from '../images/i007.jpeg'
import i008 from '../images/i008.jpg'
import i009 from '../images/i009.jpeg'

const images1 = [
  i000,
  i001,
  i002,
  i003,
  i004,
  i005,
  i006,
  i007,
  i008,
  i009
]

const images2 = [
  i000,
  i001,
  i002,
  i003,
  i004,
  i005,
  i006,
  i007,
  i008,
  i009
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

let shuffled1 = shuffleArray(images1)

let shuffled2 = shuffleArray(images2)

let shuffled3 = shuffled1.concat(shuffled2)

let images3 = images1.concat(images2)

let pics = { images1, images2, images3, shuffled1, shuffled2, shuffled3 }

export default pics