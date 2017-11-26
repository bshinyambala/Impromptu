import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/RestaurantStyle'
import StoreLocator from './StoreLocator'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Color from '../Themes/Colors'

export default class Restaurant extends Component {
  // Prop type warnings
  static propTypes = {
    restaurant: PropTypes.object
  }

  // Defaults for props
  static defaultProps = {
    restaurant: require('../Fixtures/restaurant.json')
  }

  render () {
    const {restaurant} = require('../Fixtures/restaurant.json')
    console.tron.log(restaurant)
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={styles.container}>
        <View style={[styles.mainFeature]}>
          <Image style={styles.featuredImage} source={{uri: restaurant.featured_image}} />
        </View>
        <TouchableOpacity style={[styles.subFeature]}>
          <StoreLocator />
        </TouchableOpacity>
        <View style={[styles.pit]}>
          <View style={[styles.actions]}>
            <TouchableOpacity style={styles.iconButton} >
              <Icon style={styles.action} name='phone' size={25} color={Color.silver} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.action} name='globe' size={25} color={Color.silver} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.action} name='menu' size={25} color={Color.silver} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.action} name='share-alt' size={30} color={Color.silver} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.action} name='directions' size={30} color={Color.silver} />
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>{restaurant.name}</Text>
          <Text style={styles.label}>{restaurant.cuisines} Cuisine(s)</Text>
          <Text style={styles.label}>{restaurant.currency}{restaurant.average_cost_for_two} Avg. Cost For 2</Text>
          <Text style={styles.label}>{restaurant.user_rating.aggregate_rating} Avg. Rating</Text>
          <Text style={styles.label}>{restaurant.user_rating.rating_text}</Text>
          <Text style={styles.label}>{restaurant.user_rating.votes} Votes</Text>
          <Text style={styles.label}>Offers : {restaurant.offers}</Text>
        </View>
      </View>
    )
  }
}
