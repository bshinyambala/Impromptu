import { StyleSheet } from 'react-native'
import Color from '../../Themes/Colors'

// Enable this if you have app-wide application styles
// import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  // Merge in the screen styles from application styles
  // ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Color.snow
  },
  map: {
    // For Android :/
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})
