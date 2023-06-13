// initial state
const state = () => ({
  items: []
})

const getters = {
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
  }
}

// actions
const actions = {
  addItem({ state, commit }, product) {
    let whichProduct
    const existing = state.items.filter(function (item, index) {
      if (item.product.id == Number(product.id)) {
        whichProduct = index
        return true
      } else {
        return false
      }
    })

    if (existing.length) {
      state.items[whichProduct].qty++
    } else {
      state.items.push({ product: product, qty: 1 })
    }
  },

  deleteItem({ state, commit }, id) {
    if (state.items[id].qty > 1) {
      commit('decrementItemQuantity', id)
    } else {
      commit('removeItem', id)
    }
  }
}

// mutations
const mutations = {
  decrementItemQuantity(state, id) {
    const item = state.items.find(item => item.id === id)
    item.qty--
  },
  removeItem(state, id) {
    state.items.splice(id, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
