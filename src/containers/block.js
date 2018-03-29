import React, { Component } from 'react';
import {
   View, TouchableOpacity, Text, TextInput
} from 'react-native';

import boxStyle from './assets/styles/main'
import textStyle from './assets/styles/text'
import { Back } from './assets/components/backandnext'

class Block extends Component{
  static navigationOptions = {
    header: null
  }
  render(){
    const { navigate, goBack } = this.props.navigation
    return(
      <View style={[boxStyle.ctn,boxStyle.body,{flex:1}]}>
        <Back goBack={goBack} _style={'helo'} />
        <TextInput style={boxStyle.input} />
        <TouchableOpacity style={[boxStyle.btn,boxStyle.ctn,{marginTop:80}]}>
          <Text>This is block</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Block
