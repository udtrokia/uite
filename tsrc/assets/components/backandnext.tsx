import React, { Component } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import boxStyle from "../styles/main";
import textStyle from "../styles/text";

export const Back = ({goBack}) => (
  <TouchableOpacity
    onPress={() => goBack()}
    style={[boxStyle.ctn]}>
    <Text style={textStyle.intro}>{"<<------------"}</Text>
  </TouchableOpacity>
);

export const Next = ({navigate, where}) => (
  <TouchableOpacity
    onPress={() => navigate(where)}
    style={[boxStyle.ctn]}>
    <Text style={textStyle.intro}>{"------------>>"}</Text>
  </TouchableOpacity>
);
