import { StackNavigator } from 'react-navigation'
import EntranceScreen from './entrance'
import TutorialScreen from './tutorial'
import BlockScreen from './block'
import MineScreen from './mine'
export default StackNavigator({
  EntranceScreen: { screen: EntranceScreen },
  Tutorial: { screen: TutorialScreen },  
  Block: { screen: BlockScreen },
  Mine: { screen: MineScreen }
})

