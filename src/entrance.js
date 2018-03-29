import React, { Component } from 'react';
import {
  View, Text, Alert,
  TouchableOpacity
} from 'react-native';

import boxStyle from './assets/styles/main'
import textStyle from './assets/styles/text'
import text from './assets/text'

class Entrance extends Component{
  static navigationOptions = {
    header: null
  }
  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={[boxStyle.ctn,boxStyle.body,{flex:1}]}>
        <Text style={textStyle.common}>{text.block.main}</Text>
        <TouchableOpacity
          onPress={()=>navigate('Tutorial')}
          style={[boxStyle.btn,boxStyle.ctn,{marginTop:100}]}
        ><Text>Toturial</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>Alert.alert('The new space is building...')}
          style={[boxStyle.btn,boxStyle.ctn,{marginTop:30}]}
        ><Text>Scan</Text></TouchableOpacity>        
      </View>
    )
  }
}

export default Entrance
