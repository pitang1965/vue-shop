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

<script setup>
import { computed, onBeforeMount, reactive, ref } from 'vue'
import Navbar from '@/components/Navbar.vue'

const cart = reactive([])
const products = reactive([])
const displayCart = ref(false)

const featchProducts = async () => {
  try {
    await fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data => {
        products.push(...data)
      })
  } catch (error) {
    console.error(error)
  }
}

const addItem = product => {
  let whichProduct
  const existing = cart.filter(function (item, index) {
    if (item.product.id == Number(product.id)) {
      whichProduct = index
      return true
    } else {
      return false
    }
  })

  if (existing.length) {
    cart[whichProduct].qty++
  } else {
    cart.push({ product: product, qty: 1 })
  }
}
const deleteItem = id => {
  if (cart[id].qty > 1) {
    cart[id].qty--
  } else {
    cart.splice(id, 1)
  }
}

const cartTotal = computed(() => {
  let sum = 0
  for (let key in cart) {
    sum += cart[key].product.price * cart[key].qty
  }
  return sum
})

const cartQty = computed(() => {
  let qty = 0
  for (let key in cart) {
    qty += cart[key].qty
  }
  return qty
})

onBeforeMount(() => {
  featchProducts()
})
</script>
