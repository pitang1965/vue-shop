<template>
  <navbar :cart="cart" :cart-total="cartTotal" :cart-qty="cartQty" @delete-item="deleteItem" />
  <router-view
    :products="products"
    :cart="cart"
    @addItem="addItem"
    @delete-item="deleteItem"
    :cart-total="cartTotal"
  />
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  data: function () {
    return {
      cart: [],
      displayCart: false,
      products: []
    }
  },
  components: {
    Navbar
  },
  created() {
    fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data => {
        this.products = data
      })
  },
  methods: {
    addItem(product) {
      let whichProduct
      const existing = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          whichProduct = index
          return true
        } else {
          return false
        }
      })

      if (existing.length) {
        this.cart[whichProduct].qty++
      } else {
        this.cart.push({ product: product, qty: 1 })
      }
    },
    deleteItem: function (id) {
      console.log('deleteItem!')
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--
      } else {
        this.cart.splice(id, 1)
      }
    }
  },
  computed: {
    cartTotal() {
      let sum = 0
      for (let key in this.cart) {
        sum += this.cart[key].product.price * this.cart[key].qty
      }
      return sum
    },
    cartQty() {
      let qty = 0
      for (let key in this.cart) {
        qty += this.cart[key].qty
      }
      return qty
    }
  }
}
</script>
