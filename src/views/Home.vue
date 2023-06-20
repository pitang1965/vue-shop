<template>
  <section class="container mx-auto px-2" @click="onClick">
    <range-selector :products="filteredProducts" v-model="max" />
    <product-list :products="filteredProducts" />
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ProductList from '@/components/ProductList.vue'
import RangeSelector from '@/components/RangeSelector.vue'
import { useStore } from 'vuex'

const props = defineProps(['products'])

const max = ref(50)

const store = useStore()

const filteredProducts = computed(() =>
  props.products.filter(item => item.price < Number(max.value))
)

const onClick = () => {
  store.dispatch('cart/hideCart')
}

const onEscapePress = event => {
  if (event.key == 'Escape') {
    store.dispatch('cart/hideCart')
  }
}

onMounted(() => {
  window.addEventListener('keydown', onEscapePress)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onEscapePress)
})
</script>
