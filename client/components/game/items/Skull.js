import Item from './Item'
import {addToInv} from '../../../actions/inventory'
import {deleteItem} from '../../../actions/worldItems'


export default class Skull extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Skull.png'
    this.msg = 'You feel like you are being watched...'
    this.name = 'skull'
    this.roomStyle = {
      width: '110px',
      height: '100px',
      position: 'absolute',
      top: '71%',
      left: '71%',
      zIndex: 5
    }
    this.invStyle = {
      width: '90px',
      height: '80px',
      position: 'absolute',
      top: '0%',
      left: '0%',
      zIndex: 5
    }
  }
  mouseClick(){
    this.dispatch(addToInv(this))
    this.dispatch(deleteItem(this.name))
    // console.log("I'm a skull!") // but to our log
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }
}
