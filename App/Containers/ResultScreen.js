import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ResultScreenStyle'
import Restaurant from '../Components/Restaurant'

class ResultScreen extends Component {
  render () {
    return (
      <Restaurant restaurant={this.props.restaurant} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurant: state.restaurants.payload.restaurant
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen)
