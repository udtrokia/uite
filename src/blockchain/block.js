const Hashes = require('jshashes')
const RMD160  = new Hashes.RMD160()

class Block {
  constructor(){
  },
  newBlock(
    data,
    prehashes,
    timestamp,
  ){
    let nonce = Math.floor(Math.random() * 60 * 60 * 24 * 365 )
    let hashes = RMD160.hex( nonce, prehashes )
    let block = { data, timestamp, nonce, prehashes, hashes }
    return block
  }
}

export default Block
