import Hashes from "jshashes";
import React, { Component } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Back, Next } from "./assets/components/backandnext";
import boxStyle from "./assets/styles/main";
import textStyle from "./assets/styles/text";

const RMD160  = new Hashes.RMD160();

class Mine extends Component {
  public navigationOptions = {
    header: null,
  };
  public state = {
    btnLabel: `scan prehash`,
    data: `data`,
    hash: `hash`,
    mining: false,
    nonce: `nonce`,
    prehash: `prehash`,
    timestamp: `timestamp`,
  };
  public async btnTap() {
    const { data, timestamp, nonce, prehash, hash } = this.state;
    if (prehash === `prehash`) {
      this.setState({
        btnLabel: `drop data`,
        prehash: RMD160.hex( new Date().getTime() + Math.floor( Math.random() * 1440 * 365)),
      });
    } else if (data === `data`) {
      this.setState({data: `any data you want`, btnLabel: `shortcut time`});
    } else if (timestamp === `timestamp`) {
      this.setState({
        btnLabel: "create nonce",
        timestamp: new Date().getTime(),
      });
    } else if (nonce === `nonce`) {
      this.setState({
        btnLabel: `mine( if you press this, please wait a momennt 🍀 )`,
        nonce: Math.floor(Math.random() * 1440),
      });
    } else if (hash === "hash") {
      const newhash = RMD160.hex(prehash + Math.floor(Math.random() * 1440));
      let minehash;
      while (minehash !== newhash) {
        minehash = RMD160.hex(prehash + Math.floor(Math.random() * 1440));
      }
      this.setState({
        btnLabel: "you've just mined out a block! 🌎",
        hash: newhash,
      });
    }
  }
  public render() {
    const { navigate, goBack } = this.props.navigation;
    const { data, timestamp, nonce, prehash, hash, btnLabel } = this.state;
    return(
      <View style={[boxStyle.ctn, boxStyle.body, {flex: 1}]}>
        <Back goBack={goBack} />
        <View style={[boxStyle.btn, textStyle.marginCol, {marginTop: 20}]}>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{prehash}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{data}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{timestamp}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{nonce}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{hash}</Text>
        </View>
        <TouchableOpacity
          onPress ={() => this.btnTap()}
          style={[boxStyle.btn, boxStyle.ctn, textStyle.marginCol, {marginTop: 10, marginBottom: 20}]}>
          <Text style={textStyle.marginRow}>{btnLabel}</Text>
        </TouchableOpacity>
        <Next navigate={navigate} where="Blockchain" />
      </View>
    );
  }
}

export default Mine;
