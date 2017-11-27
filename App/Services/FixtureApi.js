export default {
  // Functions return fixtures
  getDailyMenu: (restaurantId) => {
    return {
      ok: true,
      data: ''// require('../Fixtures/dailymenu.json')
    }
  },
  getLocationDetails: () => {
    return {
      ok: true,
      data: ''// require('../Fixtures/locationdetails.json')
    }
  },
  getRestaurants: (filter) => {
    return {
      ok: true,
      data: require('../Fixtures/restaurants.json')
    }
  }
}
