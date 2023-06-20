// initial state
const state = () => ({
  items: [],
  displayCart: false
})

const getters = {
  items: (state, getters) => state.items,
  cartTotal: (state, getters) => {
    let sum = 0
    for (let key in state.items) {
      sum += state.items[key].product.price * state.items[key].qty
    }
    return sum
  },
  cartQuantity: (state, getters) => {
    let qty = 0
    for (let key in state.items) {
      qty += state.items[key].qty
    }
    return qty
  },
  displayCart: (state, getters) => state.displayCart
}

// actions
const actions = {
  addItem({ state, commit }, product) {
    let productId
    const existing = state.items.filter(function (item) {
      if (Number(item.product.id) === Number(product.id)) {
        productId = item.product.id
        return true
      } else {
        return false
      }
    })

    if (existing.length) {
      commit('INCREMENT_ITEM_QUANTITY', productId)
    } else {
      commit('ADD_ITEM', { product: product, qty: 1 })
    }
  },

  deleteItem({ state, commit }, id) {
    const item = state.items.find(item => Number(item.product.id) === Number(id))
    if (item.qty > 1) {
      commit('DECREMENT_ITEM_QUANTITY', id)
    } else {
      commit('REMOVE_ITEM', id)
    }
  },

  toggleDisplayCart({ state, commit }) {
    commit('DISPLAY_CART', !state.displayCart)
  },

  hideCart({ state, commit }) {
    commit('DISPLAY_CART', false)
  }
}

// mutations
const mutations = {
  ADD_ITEM(state, item) {
    state.items.push(item)
  },
  DECREMENT_ITEM_QUANTITY(state, id) {
    const item = state.items.find(item => Number(item.product.id) === Number(id))
    item.qty--
  },
  INCREMENT_ITEM_QUANTITY(state, id) {
    const item = state.items.find(item => Number(item.product.id) === Number(id))
    item.qty++
  },
  REMOVE_ITEM(state, id) {
    state.items = state.items.filter(item => item.product.id !== id)
  },
  DISPLAY_CART(state, value) {
    state.displayCart = value
  } 
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
