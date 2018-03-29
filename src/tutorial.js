import React, { Component } from 'react';
import {
  View, Text, Alert,
  TouchableOpacity
} from 'react-native';
import { Back } from './assets/components/backandnext'

import boxStyle from './assets/styles/main'
import textStyle from './assets/styles/text'
import text from './assets/text'

class Tutorial extends Component{
  static navigationOptions = {
    header: null
  }
  render(){
    const { navigate,goBack } = this.props.navigation
    return(
      <View style={[boxStyle.ctn,boxStyle.body,{flex:1}]}>
        <Back goBack={goBack} />
        <TouchableOpacity
          onPress={()=>navigate('Block')}
          style={[boxStyle.ctn,{marginTop:20}]}
        ><Text style={textStyle.intro}>BLOCK</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigate('Mine')}
          style={[boxStyle.ctn, {marginTop:20}]}
        ><Text style={textStyle.intro}>MINE</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigate('Blockchain')}
          style={[boxStyle.ctn, {marginTop:20}]}
        ><Text style={textStyle.intro}>BLOCKCHAIN</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>Alert.alert('developing...')}
          style={[boxStyle.ctn, {marginTop:20}]}
        ><Text style={textStyle.intro}>DISTRIBUTED</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>Alert.alert('developing...')}          
          style={[boxStyle.ctn, {marginTop:20}]}
        ><Text style={textStyle.intro}>BRANCH</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>Alert.alert('developing...')}
          style={[boxStyle.ctn, {marginTop:20}]}
        ><Text style={textStyle.intro}>CONSENSUS</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>Alert.alert('developing...')}          
          style={[boxStyle.ctn, {marginTop:20}]}
        ><Text style={textStyle.intro}>THE UNITY</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>Alert.alert('Ooops, this query has no use')}          
          style={[boxStyle.ctn, {marginTop:20}]}
        ><Text style={textStyle.intro}>{"------------>>"}</Text></TouchableOpacity>
      </View>
    )
  }
}

export default Tutorial
