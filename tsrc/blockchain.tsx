import Hashes from "jshashes";
import React, { Component } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Back, Next } from "./assets/components/backandnext";
import boxStyle from "./assets/styles/main";
import textStyle from "./assets/styles/text";
const RMD160  = new Hashes.RMD160();
class Block extends Component {
  public navigationOptions = {
    header: null,
  };
  public state = {
    btnLabel: `add data`,
    data: `data`,
    hash: `hash`,
    newPrehash: `prehash`,
    newnonce: `nonce`,
    nexthash: `hash`,
    nonce: `nonce`,
    prehash: `prehash`,
    timestamp: `timestamp`,
  };
  public async btnTap() {
    const { data, timestamp, nonce, prehash, hash, newPrehash, newnonce, nexthash } = this.state;
    if (data === `data`) {
      this.setState({data: `any data you want`, btnLabel: `shortcut time`});
    } else if (timestamp === `timestamp`) {
      this.setState({timestamp: new Date().getTime(), btnLabel: `create nonce`});
    } else if (nonce === `nonce`) {
      this.setState({nonce: Math.floor(Math.random() * 1440 * 365), btnLabel: `get prehash` });
    } else if (prehash === `prehash`) {
      this.setState({prehash: RMD160.hex( nonce, timestamp ), btnLabel: `create hash`});
    } else if (hash === `hash`) {
      await this.setState({
        btnLabel: "Let's conact the next block",
        hash: RMD160.hex( nonce, prehash, timestamp ),
      });
      await this.setState({newPrehash: this.state.hash});
    } else if (newnonce === `nonce`) {
      this.setState({
        btnLabel: "mine(like before, please wait for a moment 😉)",
        newnonce: Math.floor(Math.random() * 1440 * 365),
      });
    } else if (nexthash === `hash`) {
      const newhash = RMD160.hex( prehash + Math.floor(Math.random() * 1440) );
      let minehash;
      while (minehash !== newhash) {
        minehash = RMD160.hex( prehash + Math.floor(Math.random() * 1440));
      }
      this.setState({
        btnLabel: "AWESOME! You've just create a blockchain! 👾",
        nexthash: newhash,
      });
    }
  }
  public render() {
    const { navigate, goBack } = this.props.navigation;
    const { btnLabel, data, newnonce, newPrehash, nexthash, nonce, prehash, hash, timestamp } = this.state;
    return(
      <View style={[boxStyle.ctn, boxStyle.body, {flex: 1, marginTop: 30}]}>
        <Back goBack={goBack} />
        <View style={[boxStyle.btn, textStyle.marginCol, {marginTop: 40}]}>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{data}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{timestamp}</Text>
      <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{nonce}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{prehash}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{hash}</Text>
        </View>
        <View style={[boxStyle.btn, textStyle.marginCol, {marginTop: 20}]}>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{newPrehash}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{newnonce}</Text>
          <Text style={[textStyle.common, textStyle.marginRow, textStyle.marginCol]}>{nexthash}</Text>
        </View>
        <TouchableOpacity onPress ={() => this.btnTap()}
          style={[boxStyle.btn, boxStyle.ctn, textStyle.marginCol, {marginTop: 10, marginBottom: 20}]}>
          <Text style={textStyle.marginRow}>{btnLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert("Distributed part is coming soon...")}
          style={[boxStyle.ctn, {marginTop: 20}]}
        ><Text style={textStyle.intro}>{"------------>>"}</Text>
        </TouchableOpacity>
        {/*<Next navigate={navigate} where="Mine" />*/}
      </View>
    );
  }
}

export default Block;
