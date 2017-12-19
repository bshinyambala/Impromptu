/* eslint-disable no-undef */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity, Share, Linking } from 'react-native'
import {Examples} from '@shoutem/ui'
import styles from './Styles/RestaurantStyle'
import StoreLocator from './StoreLocator'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Color from '../Themes/Colors'
import getDirections from 'react-native-google-maps-directions'
import call from 'react-native-phone-call'

export default class Restaurant extends Component {
  // Prop type warnings
  static propTypes = {
    restaurant: PropTypes.object
  }

  // Defaults for props
  static defaultProps = {
    restaurant: {}
  }

  getDirections () {
    const {restaurant} = this.props
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPosition = JSON.stringify(position)
      const data = {
        source: {
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude
        },
        destination: {
          latitude: +restaurant.location.latitude,
          longitude: +restaurant.location.longitude
        },
        params: [
          {
            key: 'address',
            value: restaurant.location.address
          }
        ]
      }
      getDirections(data)
    },
     (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }

  callRestaurant () {
    const args = {
      number: '8168784484',
      prompt: true
    }

    call(args).catch(console.error)
  }

  goToWebsite () {
    const {restaurant} = this.props
    Linking.openURL(restaurant.url).catch(err => console.error('An error occurred', err))
  }

  share () {
    const {restaurant} = this.props
    Share.share({message: restaurant.location.address, title: restaurant.name}, {})
  }

  render () {
    const {restaurant} = this.props
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
            <TouchableOpacity style={styles.iconButton}>
              <Icon style={styles.action} name='phone' size={25} color={Color.silver} onPress={this.callRestaurant} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.action} name='globe' size={25} color={Color.silver} onPress={this.goToWebsite} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.action} name='menu' size={25} color={Color.silver} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.action} name='share-alt' size={30} color={Color.silver} onPress={this.share} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.action} name='directions' size={30} color={Color.silver} onPress={this.getDirections} />
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
