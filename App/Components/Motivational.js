import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Text } from 'react-native'
import styles from './Styles/MotivationalStyle'

export default class Motivational extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <Text style={[styles.label, styles.sectionHeader, styles.header, styles.container]}> Hello!!, will you please make up your mind
          already!!!!!?</Text>
    )
  }
}
