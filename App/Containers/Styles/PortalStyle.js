import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  header: {
    paddingTop: 30,
    paddingBottom: 80
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
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: Colors.snow,
    borderWidth: 5
  },
  boldLabel: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    fontFamily: 'Cochin',
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  divider: {
    borderBottomColor: Colors.snow,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Colors.snow
  }
})
