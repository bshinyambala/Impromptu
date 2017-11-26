import { StyleSheet } from 'react-native'
import Color from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.banner,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '1%'
  },
  pit: {
    flex: 1,
    backgroundColor: Color.transparent,
    flexDirection: 'column',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: '5%',
    paddingBottom: '3%'
  },
  actions: {
    flex: 1,
    backgroundColor: Color.transparent,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingBottom: '5%',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: Color.transparent
  },
  action: {
    paddingRight: '3%'
  },
  mainFeature: {
    flex: 1,
    width: '95%',
    height: '100%',
    marginBottom: '0.5%',
    backgroundColor: Color.transparent,
    borderRadius: 1,
    borderWidth: 0,
    borderColor: Color.snow
  },
  subFeature: {
    flex: 1,
    width: '95%',
    height: '100%',
    marginBottom: '0.5%',
    backgroundColor: Color.transparent,
    paddingTop: '3%'
  },
  sectionBorder: {
    borderRadius: 0,
    borderWidth: 1,
    borderLeftColor: Color.transparent,
    borderRightColor: Color.transparent,
    borderBottomColor: Color.snow,
    borderTopColor: Color.snow
  },
  sideBorders: {
    borderWidth: 1,
    borderLeftColor: Color.snow,
    borderRightColor: Color.snow,
    borderBottomColor: Color.transparent,
    borderTopColor: Color.transparent
  },
  featuredImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  label: {
    fontFamily: 'Cochin',
    fontSize: 18,
    textAlign: 'center',
    color: Color.snow
  },
  iconButton: {

  }
})
