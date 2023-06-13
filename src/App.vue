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
import { useStore } from 'vuex'
import Navbar from '@/components/Navbar.vue'

const store = useStore()
const cart = computed(() => store.state.cart.items)

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
  store.dispatch('cart/addItem', product)
}

const deleteItem = id => {
  store.dispatch('cart/deleteItem', id)
}

const cartTotal = computed(() => store.getters['cart/cartTotal'])

const cartQty = computed(() => store.getters['cart/cartQuantity'])

onBeforeMount(() => {
  featchProducts()
})
</script>
