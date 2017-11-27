import { StackNavigator } from 'react-navigation'
import ResultScreen from '../Containers/ResultScreen'
import Portal from '../Containers/Portal'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ResultScreen: { screen: ResultScreen },
  Portal: { screen: Portal },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
