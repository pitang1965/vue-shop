// initial state
const state = () => ({
  items: []
})

const getters = {
  items: (state, getters) => state.items,
  cartTotal: (state, getters) => {
    console.log(state.items)
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
  }
}

// actions
const actions = {
  addItem({ state, commit }, product) {
    console.log('product.id: ', product.id)
    let productId
    const existing = state.items.filter(function (item) {
      console.log('item: ', item)
      if (Number(item.product.id) === Number(product.id)) {
        productId = item.product.id
        console.log('return true')
        return true
      } else {
        console.log('return false')
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
