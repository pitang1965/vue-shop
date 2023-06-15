import { createStore } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import chart from './modules/chart'

export default createStore({
  modules: {
    cart,
    products,
    chart
  }
})