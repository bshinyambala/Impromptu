import { StyleSheet } from 'react-native'
import Color from '../../Themes/Colors'

export default StyleSheet.create({
  callout: {
    position: 'relative',
    flex: 1,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    borderWidth: 3,
    borderColor: Color.background,
    backgroundColor: Color.transparent
  },
  calloutText: {
    color: Color.bloodOrange,
    width: '100%',
    height: '100%',
    fontFamily: 'Cochin'
  }
})
