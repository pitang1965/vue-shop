<template>
  <div class="">
    <transition name="dropdown">
      <div
        v-if="displayCart"
        class="flex flex-col gap-1 py-2 mt-2 mr-5 bg-white shadow-xl rounded-md w-auto overflow-hidden"
        aria-labelledby="cartDropdown"
      >
        <div v-for="(item, index) in cart" :key="index">
          <div class="text-sm text-right align-middle">
            <span class="bg-green-600 text-white px-2 py-1 ml-2 rounded">
              {{ item.qty }}
            </span>
            {{ item.product.name }}
            <b> <curr :amt="item.qty * Number(item.product.price)"></curr></b>
            <button
              @click.stop="$parent.$emit('deleteItem', index)"
              class="bg-[#ff0000] hover:bg-[#ee0000] text-white font-bold w-5 h-5 ml-2 rounded"
            >
              -
            </button>
          </div>
        </div>
        <router-link
          to="/checkout"
          class="self-end bg-purple-500 hover:bg-purple-600 text-white font-bold mt-1 px-2.5 py-0.5 no-underline rounded-md"
          >カートを見る</router-link
        >
      </div>
    </transition>
  </div>
</template>

<script setup>
import Curr from '@/components/Curr.vue'

const props = defineProps(['cart', 'displayCart'])
const emits = defineEmits(['deleteItem'])
</script>

<style>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s ease-in-out;
  transform: auto;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}
</style>
