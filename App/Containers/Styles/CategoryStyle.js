import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    backgroundColor: Colors.transparent,
    marginVertical: Metrics.doubleBaseMargin,
    justifyContent: 'center',
    width: 200,
    height: 200,
    margin: 80,
    marginTop: 30,
    padding: 5,
    paddingVertical: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    borderColor: Colors.snow,
    borderWidth: 2
  },
  boldLabel: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  }
})
