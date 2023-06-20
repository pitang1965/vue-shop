<template>
  <navbar />
  <router-view :products="products" />
</template>

<script setup>
import { onBeforeMount, reactive } from 'vue'
import Navbar from '@/components/Navbar.vue'

const products = reactive([])

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

onBeforeMount(() => {
  featchProducts()
})
</script>
