<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mx-auto px-2">
    <h1 class="font-bold">カート</h1>
    <div v-if="cart.length === 0" class="mb-2">何もありません。</div>
    <table v-if="cart.length > 0" class="table-auto w-full text-sm mb-8">
      <caption class="text-right h3 mb-4">
        <b>合計:</b>
        <curr :amt="Number(cartTotal)"></curr>
      </caption>
      <thead>
        <tr class="border-b-2 border-slate-200">
          <th scope="col"></th>
          <th scope="col" class="text-left">品名</th>
          <th scope="col" class="text-center w-30">数量</th>
          <th scope="col" class="text-right">価格</th>
          <th scope="col" class="text-right">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in cart"
          :key="item.product.id"
          class="border-b-2 border-slate-200 hover:bg-slate-300"
        >
          <td class="p-2">
            <div class="flex" role="group" aria-label="Basic example">
              <button
                @click="$emit('addItem', item.product)"
                class="px-2 py-2 bg-slate-200 text-black hover:bg-slate-400 border-2 border-slate-300 rounded-l-lg"
              >
                +
              </button>
              <button
                @click="$emit('deleteItem', index)"
                class="px-2 py-2 bg-slate-200 text-black hover:bg-slate-400 border-2 border-slate-300 rounded-r-lg"
              >
                -
              </button>
            </div>
          </td>
          <td scope="row">{{ item.product.name }}</td>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-right"><curr :amt="Number(item.product.price)"></curr></td>
          <td class="text-right"><curr :amt="item.qty * Number(item.product.price)"></curr></td>
        </tr>
      </tbody>
    </table>
    <router-link
      class="px-2 py-2 bg-purple-500 text-sm text-white hover:bg-purple-600 rounded-md no-underline"
      to="/"
      >買い物を続ける</router-link
    >
  </div>
</template>

<script setup>
import Curr from '@/components/Curr.vue'

const props = defineProps(['cart', 'cartTotal'])
const emits = defineEmits(['addItem', 'deleteItem'])
</script>

<style>
@media (min-width: 1024px) {
  .checkout {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
