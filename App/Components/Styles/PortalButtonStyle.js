import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.doubleBaseMargin,
    justifyContent: 'center',
    width: 100,
    height: 165,
    margin: 10,
    padding: 5,
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 0,
    borderColor: Colors.snow,
    borderWidth: 2
  },
  boldLabel: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  }
})
