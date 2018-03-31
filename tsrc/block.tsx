import Hashes from "jsHashes";
import React, { Component } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Back, Next } from "./assets/components/backandnext";
import boxStyle from "./assets/styles/main";
import textStyle from "./assets/styles/text";

const RMD160  = new Hashes.RMD160();

class Block extends Component {
  public navigationOptions = {
    header: null,
  };
  public state = {
    btnLabel: "add data",
    data: "data",
    hash: "hash",
    nonce: "nonce",
    prehash: "prehash",
    timestamp: "timestamp",
  };
  public btnTap() {
    const { data, hash, nonce, prehash, timestamp } = this.state;
    if ( data === "data" ) {
      this.setState({btnLabel: "shortcut time", data: "any data you want"});
    } else if (timestamp === "timestamp") {
      this.setState({btnLabel: "create nonce", timestamp: new Date().getTime()});
    } else if (nonce === "nonce") {
      this.setState({btnLabel: "get prehash" , nonce: Math.floor(Math.random() * 1440 * 365)});
    } else if (prehash === "prehash") {
      this.setState({btnLabel: "create hash", prehash: RMD160.hex( nonce, timestamp )});
    } else if (hash === "hash") {
      this.setState({btnLabel: "this is a simple block 🙃", hash: RMD160.hex( prehash, nonce, timestamp )});
    }
  }
  public render() {
    const { goBack, navigate } = this.props.navigation;
    const { btnLabel, data, hash, nonce, prehash, timestamp } = this.state;
    return(
      <View style={[boxStyle.ctn, boxStyle.body, {flex: 1}]}>
        <Back goBack={goBack} />
        <View style={[boxStyle.btn, textStyle.marginCol, {marginTop: 20}]}>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{data}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{timestamp}</Text>
      <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{nonce}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{prehash}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{hash}</Text>
        </View>
        <TouchableOpacity onPress ={() => this.btnTap()}
          style={[boxStyle.btn, boxStyle.ctn, textStyle.marginCol, {marginTop: 10, marginBottom: 20}]}>
          <Text style={textStyle.marginRow}>{btnLabel}</Text>
        </TouchableOpacity>
        <Next navigate={navigate} where="Mine" />
      </View>
    );
  }
}

export default Block;
