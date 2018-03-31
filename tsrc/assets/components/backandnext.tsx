import React, { Component } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import boxStyle from "../styles/main";
import textStyle from "../styles/text";

export interface IBackProps {
  goBack: object;
}

export interface INextProps {
  navigate: object;
  where: string;
}

export const Back = ({goBack}: IBackProps) => (
  <TouchableOpacity
    onPress={() => goBack()}
    style={[boxStyle.ctn]}>
    <Text style={textStyle.intro}>{"<<------------"}</Text>
  </TouchableOpacity>
);

export const Next = ({navigate, where}: INextProps) => (
  <TouchableOpacity
    onPress={() => navigate(where)}
    style={[boxStyle.ctn]}>
    <Text style={textStyle.intro}>{"------------>>"}</Text>
  </TouchableOpacity>
);
