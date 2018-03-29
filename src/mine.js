import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, TextInput
} from 'react-native';

const Hashes = require('jshashes')
const RMD160  = new Hashes.RMD160()

import boxStyle from './assets/styles/main'
import textStyle from './assets/styles/text'
import { Back, Next } from './assets/components/backandnext'

class Mine extends Component{
  static navigationOptions = {
    header: null
  }
  state = {
    data: `data`,
    timestamp: `timestamp`,
    nonce: `nonce`,
    prehash: `prehash`,
    hash: `hash`,
    mining: false,
    btnLabel: `scan prehash`
  }
  async btnTap(){
    const { data, timestamp, nonce, prehash, hash } = this.state
    if(prehash === `prehash`){
      this.setState({prehash: RMD160.hex(new Date().getTime() + Math.floor(Math.random()*60*60*24*365)), btnLabel: `drop data`})
    }else if(data === `data`){
       this.setState({data: `any data you want`, btnLabel: `shortcut time`})
    }else if(timestamp === `timestamp`){
       this.setState({timestamp: new Date().getTime(), btnLabel: `create nonce`})
    }else if(nonce === `nonce`){
       this.setState({nonce: Math.floor(Math.random()*60*60*24), btnLabel: `mine( if you press this, please wait a momennt )` })
    }else if(hash === `hash`){
      const newhash = RMD160.hex( prehash + Math.floor(Math.random()*60*24*24) )
      let minehash;
      while(minehash !== newhash){
        minehash = RMD160.hex( prehash + Math.floor(Math.random()*60*24*24))
      }
      this.setState({btnLabel: `you've just mined out a block!`, hash: newhash})
    }
  }
  render(){
    const { navigate, goBack } = this.props.navigation
    const { data,timestamp,nonce,prehash,hash,btnLabel } = this.state
    return(
      <View style={[boxStyle.ctn,boxStyle.body,{flex:1}]}>
        <Back goBack={goBack} />
        <View style={[boxStyle.btn,textStyle.marginCol, {marginTop:20}]}>
          <Text style={[textStyle.common,textStyle.marginRow,textStyle.marginCol]}>{prehash}</Text>
          <Text style={[textStyle.common,textStyle.marginRow,textStyle.marginCol]}>{data}</Text>
          <Text style={[textStyle.common,textStyle.marginRow,textStyle.marginCol]}>{timestamp}</Text>
          <Text style={[textStyle.common,textStyle.marginRow,textStyle.marginCol]}>{nonce}</Text>
          <Text style={[textStyle.common,textStyle.marginRow,textStyle.marginCol]}>{hash}</Text>
        </View>
        <TouchableOpacity onPress ={()=>{this.btnTap()}}
                          style={[boxStyle.btn,boxStyle.ctn,textStyle.marginCol, {marginTop:10, marginBottom:20}]}>
          <Text style={textStyle.marginRow}>{btnLabel}</Text>
        </TouchableOpacity>
        <Next navigate={navigate} where="Blockchain" />
      </View>
    )
  }
}

export default Mine
