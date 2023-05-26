<template>
  <section class="container">
    <range-selector :products = "filteredProducts" v-model="max" />
    <transition-group name="products" appear>
      <div
        v-for="item in filteredProducts"
        :key="item.id"
        id="item-list"
        class="row align-items-center"
      >
        <product :item="item" @add-to-cart="addToCart"></product>
      </div>
    </transition-group>
  </section>
</template>

<script>
import Product from '@/components/Product.vue'
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
    Product,
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
