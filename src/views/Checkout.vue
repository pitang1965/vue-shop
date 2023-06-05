<!-- TODO: bootstrapをTailwind CSSに変更する -->
<template>
  <div class="container">
    <h1>カート</h1>

    <table class="table-auto w-full">
      <caption class="text-right h3">
        <b>合計:</b>
        <curr :amt="Number(cartTotal)"></curr>
      </caption>
      <thead>
        <tr class="border-b-2 border-slate-200">
          <th scope="col"></th>
          <th scope="col">品名</th>
          <th scope="col" class="text-center w-30">数量</th>
          <th scope="col" class="text-right">価格</th>
          <th scope="col" class="text-right">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id" class="border-b-2 border-slate-200 hover:bg-slate-300">
          <td class="p-2">
            <div class="flex" role="group" aria-label="Basic example">
              <button @click="this.$emit('addItem', item.product)" class="px-2 py-2 bg-slate-200 text-black hover:bg-slate-400 border-2 border-slate-300 rounded-l-lg">
                +
              </button>
              <button @click="this.$emit('deleteItem', index)" class="px-2 py-2 bg-slate-200 text-black hover:bg-slate-400 border-2 border-slate-300 rounded-r-lg">
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
    <router-link class="px-2 py-2 bg-purple-500 text-white hover:bg-purple-600 rounded-lg no-underline" to="/">買い物を続ける</router-link>
  </div>
</template>

<script>
import Curr from '@/components/Curr.vue'

export default {
  props: ['cart', 'cartTotal'],
  components: { Curr },
  emits: ['addItem', 'deleteItem']
}
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
