import { StackNavigator } from "react-navigation";
import BlockScreen from "./block";
import BlockChainScreen from "./blockchain";
import EntranceScreen from "./entrance";
import MineScreen from "./mine";
import TutorialScreen from "./tutorial";
export default StackNavigator({
  Block: { screen: BlockScreen },
  Blockchain: { screen: BlockChainScreen },
  EntranceScreen: { screen: EntranceScreen },
  Mine: { screen: MineScreen },
  Tutorial: { screen: TutorialScreen },
}, {
  initialRouteName: "EntranceScreen",
});
