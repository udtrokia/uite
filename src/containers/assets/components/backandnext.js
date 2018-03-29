import React, { Component } from 'react';
import {
  View, Text, Alert,
  TouchableOpacity
} from 'react-native';

import boxStyle from '../styles/main'
import textStyle from '../styles/text'

export const Back = ({goBack}) =>(
  <TouchableOpacity
    onPress={()=>goBack()}
    style={[boxStyle.ctn,{marginTop:20}]}>
    <Text style={textStyle.intro}>{"<<---------"}</Text>
  </TouchableOpacity>  
)

export const Next = ({navigate, where}) =>(
  <TouchableOpacity
    onPress={()=>navigate(where)}
    style={[boxStyle.ctn, boxStyle.back, {marginTop:20}]}>
    <Text style={textStyle.intro}>{"--------->>"}</Text>
  </TouchableOpacity>  
)
