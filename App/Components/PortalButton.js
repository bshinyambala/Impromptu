import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles/PortalButtonStyle'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Color from '../Themes/Colors'

export default class PortalButton extends Component {
  // Prop type warnings
  static propTypes = {
    getResult: PropTypes.func,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  // Defaults for props
  static defaultProps = {
    title: 'help'
  }

  doIt () {
    console.tron.debug('Doing it....')
  }

  render () {
    const {title, description, dispatch} = this.props
    console.tron.debug('Done....')
    console.tron.debug(dispatch)
    return (
      <TouchableOpacity style={styles.row} onPressed={this.doIt()}>
        <Icon style={styles.boldLabel} name={title} size={50} color={Color.silver} />
        <Text style={styles.boldLabel} >{description}</Text>
      </TouchableOpacity>
    )
  }
}
