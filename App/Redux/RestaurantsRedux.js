import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  restaurantsRequest: ['data'],
  restaurantsSuccess: ['payload'],
  restaurantsFailure: null
})

export const RestaurantsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) => {
  state.merge({fetching: true, data, payload: null})
}

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  console.tron.debug(state)
  console.tron.debug(action)
  console.tron.debug(payload)
  console.tron.debug(payload)
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESTAURANTS_REQUEST]: request,
  [Types.RESTAURANTS_SUCCESS]: success,
  [Types.RESTAURANTS_FAILURE]: failure
})
