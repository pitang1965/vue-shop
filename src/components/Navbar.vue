<template>
  <header>
    <div class="container mx-auto px-4">
      <nav class="flex m-2 gap-2">
        <RouterLink to="/">ホーム</RouterLink>
        <RouterLink to="/checkout">カート</RouterLink>
      </nav>
    </div>
  </header>
  <nav class="sticky top-0">
    <div v-if="cart.length" class="flex justify-end p-2">
      <span class="font-bold bg-white"><curr :amt="cartTotal"></curr></span>
      <button
        @click="toggleDisplayCart"
        class="bg-purple-500 hover:bg-purple-600 text-white font-bold px-2.5 py-0.5 rounded ml-3"
        id="cartDropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <fa icon="shopping-cart" />
        {{ cartQty }}
      </button>
      <cart-dropdown :cart="cart" :displayCart="displayCart" />
    </div>
  </nav>
</template>

<script>
import Curr from '@/components/Curr.vue'
import CartDropdown from '@/components/CartDropdown.vue'

export default {
  data: function () {
    return {
      displayCart: false
    }
  },
  components: {
    Curr,
    CartDropdown
  },
  props: ['cart', 'cartTotal', 'cartQty'],
  methods: {
    toggleDisplayCart() {
      this.displayCart = !this.displayCart
    }
  }
}
</script>
