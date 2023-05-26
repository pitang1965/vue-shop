<template>
  <section class="container">
    <range-selector :products = "filteredProducts" v-model="max" />
    <product-list :products = "filteredProducts" />
  </section>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import RangeSelector from '@/components/RangeSelector.vue'

export default {
  name: 'Home',

  data: function () {
    return {
      max: 50,
      cart: [],
      products: []
    }
  },
  components: {
    ProductList,
    RangeSelector
  },
  created() {
    fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data => {
        this.products = data
      })
  },
  computed: {
    filteredProducts() {
      return this.products.filter(item => item.price < Number(this.max))
    },
  },
}
</script>
