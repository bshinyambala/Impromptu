import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import RestaurantsActions from '../Redux/RestaurantsRedux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CategoryStyle'
import Color from '../Themes/Colors'
import PropTypes from 'prop-types'

class Category extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  // Prop type warnings
  static propTypes = {
    getResult: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    latitude: PropTypes.number,
    longitude: PropTypes.number
  }

  // Defaults for props
  static defaultProps = {
    title: 'help'
  }

  render () {
    const {title, description, getResult, latitude, longitude} = this.props
    return (
      <TouchableOpacity style={styles.row} onPress={() => getResult({lat: latitude, lon: longitude})}>
        <Icon style={styles.boldLabel} name={title} size={50} color={Color.silver} />
        <Text style={styles.boldLabel}>{description}</Text>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.location != null && state.location.position != null) {
    return {
      latitude: state.location.position.coords.latitude,
      longitude: state.location.position.coords.longitude
    }
  }
  return {}
}

const mapDispatchToProps = (dispatch, state) => ({
  getResult: (predicate) =>
    dispatch(RestaurantsActions.restaurantsRequest(predicate))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
