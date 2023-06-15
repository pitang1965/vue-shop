<template>
  <header>
    <div class="container mx-auto">
      <nav class="flex m-2 gap-2">
        <RouterLink to="/" class="hover:bg-slate-200 p-2 rounded-full">ホーム</RouterLink>
        <RouterLink to="/checkout" class="hover:bg-slate-200 p-2 rounded-full">カート</RouterLink>
      </nav>
    </div>
  </header>
  <nav class="sticky top-0">
    <div v-if="cart.length" class="flex flex-col text-sm p-2">
      <div class="flex flex-row justify-end mr-5">
        <span class="font-bold bg-white"><curr :amt="cartTotal"></curr></span>
        <button
          @click="toggleDisplayCart"
          class="bg-purple-500 hover:bg-purple-600 text-white font-bold px-2.5 py-0.5 rounded-md ml-3"
          id="cartDropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <fa icon="shopping-cart" />
          {{ cartQty }}
        </button>
      </div>
      <cart-dropdown :displayCart="displayCart" class="absolute top-8 self-end" />
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Curr from '@/components/Curr.vue'
import CartDropdown from '@/components/CartDropdown.vue'

const store = useStore()
const cart = computed(() => store.getters['cart/items'])
const cartTotal = computed(() => store.getters['cart/cartTotal'])
const cartQty = computed(() => store.getters['cart/cartQuantity'])

const displayCart = ref(false)

const toggleDisplayCart = () => {
  displayCart.value = !displayCart.value
}
</script>
