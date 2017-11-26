import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {Text} from 'react-native'
import styles from './Styles/PlayPreviewStyle'

export default class PlayPreview extends Component {
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
      <Text style={[styles.label, styles.container ]}>PlayPreview Component</Text>
    )
  }
}
