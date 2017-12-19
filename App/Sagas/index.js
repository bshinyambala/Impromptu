import { takeLatest, all, spawn } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'

/* ------------- Sagas ------------- */
import {watchLocationChannel} from 'redux-saga-location'
import { startup } from './StartupSagas'
import { pickRestaurant } from './RestaurantSagas'
import { RestaurantsTypes } from '../Redux/RestaurantsRedux'
import { SelectionTypes } from '../Redux/SelectionRedux'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(RestaurantsTypes.RESTAURANTS_REQUEST, pickRestaurant, api),
    takeLatest(SelectionTypes.SELECTION_REQUEST, api),
    spawn(watchLocationChannel)
  ])
}
