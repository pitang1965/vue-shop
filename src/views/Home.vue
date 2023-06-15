<template>
  <section class="container mx-auto px-2">
    <range-selector :products="filteredProducts" v-model="max" />
    <product-list :products="filteredProducts" />
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProductList from '@/components/ProductList.vue'
import RangeSelector from '@/components/RangeSelector.vue'

const props = defineProps(['products'])

const max = ref(50)

const filteredProducts = computed(() =>
  props.products.filter(item => item.price < Number(max.value))
)
</script>
