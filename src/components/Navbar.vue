<template>
  <div class="container mx-auto flex justify-between items-center">
    <header>
      <nav class="flex m-2 gap-2">
        <RouterLink to="/" class="hover:bg-slate-200 p-2 rounded-full">ホーム</RouterLink>
        <RouterLink to="/checkout" class="hover:bg-slate-200 p-2 rounded-full">カート</RouterLink>
        <RouterLink to="/chart" class="hover:bg-slate-200 p-2 rounded-full">チャート</RouterLink>
        <RouterLink to="/tree" class="hover:bg-slate-200 p-2 rounded-full">ツリー</RouterLink>
      </nav>
    </header>
    <nav class="top-0">
      <div v-if="cart.length" class="flex flex-col text-sm p-2">
        <div class="flex flex-row justify-end mr-5">
          <span class="font-bold bg-white"><curr :amt="cartTotal" /></span>
          <button
            @click="toggleDisplayCart"
            class="bg-purple-500 hover:bg-purple-600 text-white font-bold px-2.5 py-0.5 rounded-md ml-3"
            id="cartDropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <font-awesome-icon icon="fa-cart-shopping" />
            {{ cartQty }}
          </button>
        </div>
        <cart-dropdown :displayCart="displayCart" class="absolute top-8 self-end" />
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Curr from '@/components/Curr.vue'
import CartDropdown from '@/components/CartDropdown.vue'

const store = useStore()

const cart = computed(() => store.getters['cart/items'])
const cartTotal = computed(() => store.getters['cart/cartTotal'])
const cartQty = computed(() => store.getters['cart/cartQuantity'])
const displayCart = computed(() => store.getters['cart/displayCart'])

const toggleDisplayCart = () => {
  store.dispatch('cart/toggleDisplayCart')
}
</script>
