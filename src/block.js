import React, { Component } from 'react';
import {
   View, TouchableOpacity, Text, TextInput
} from 'react-native';

const Hashes = require('jshashes')
const RMD160  = new Hashes.RMD160()

import boxStyle from './assets/styles/main'
import textStyle from './assets/styles/text'
import { Back, Next } from './assets/components/backandnext'

class Block extends Component{
  static navigationOptions = {
    header: null
  }
  state = {
    data: `data`,
    timestamp: `timestamp`,
    nonce: `nonce`,
    prehash: `prehash`,
    hash: `hash`,
    btnLabel: `add data`
  }
  btnTap(){
    const { data, timestamp, nonce, prehash, hash } = this.state
    if(data === `data`){
      this.setState({data: `any data you want`, btnLabel: `add timestamp`})
    }else if(timestamp === `timestamp`){
      this.setState({timestamp: new Date().getTime(), btnLabel: `add nonce`})
    }else if(nonce === `nonce`){
      this.setState({nonce: Math.floor(Math.random()*60*60*24*365), btnLabel: `get prehash` })
    }else if(prehash === `prehash`){
      this.setState({prehash: RMD160.hex( nonce, timestamp ), btnLabel: `create hash`})
    }else if(hash === `hash`){
      this.setState({hash: RMD160.hex( prehash, nonce, timestamp ), btnLabel: `this is a simple block`})
    }
  }
  render(){
    const { navigate, goBack } = this.props.navigation
    const { data,timestamp,nonce,prehash,hash,btnLabel } = this.state
    return(
      <View style={[boxStyle.ctn,boxStyle.body,{flex:1}]}>
        <Back goBack={goBack} />
        <View style={[boxStyle.btn,textStyle.marginCol, {marginTop:20}]}>
          <Text style={[textStyle.common,textStyle.marginRow,textStyle.marginCol]}>{data}</Text>
          <Text style={[textStyle.common,textStyle.marginRow,textStyle.marginCol]}>{timestamp}</Text>
      <Text style={[textStyle.common,textStyle.marginRow,textStyle.marginCol]}>{nonce}</Text>
          <Text style={[textStyle.common,textStyle.marginRow,textStyle.marginCol]}>{prehash}</Text>
          <Text style={[textStyle.common,textStyle.marginRow,textStyle.marginCol]}>{hash}</Text>
        </View>
        <TouchableOpacity onPress ={()=>{this.btnTap()}}
          style={[boxStyle.btn,boxStyle.ctn,textStyle.marginCol, {marginTop:10, marginBottom:20}]}>
          <Text style={textStyle.marginRow}>{btnLabel}</Text>
        </TouchableOpacity>
        <Next navigate={navigate} where="Mine" />
      </View>
    )
  }
}

export default Block
