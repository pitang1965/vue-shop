<template>
  <section class="container mx-auto px-2">
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
      cart: []
    }
  },
  components: {
    ProductList,
    RangeSelector
  },
  props: ['products'],
  computed: {
    filteredProducts() {
      return this.products.filter(item => item.price < Number(this.max))
    },
  },
}
</script>
