<template>
  <div class="container">
    <h1>カート</h1>

    <table class="table table-hover">
      <caption class="text-right h3">
        <b>合計:</b>
        <curr :amt="Number(cartTotal)"></curr>
      </caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">品名</th>
          <th scope="col" class="text-center">数量</th>
          <th scope="col" class="text-right">価格</th>
          <th scope="col" class="text-right">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button @click="this.$emit('addItem', item.product)" class="btn btn-success">
                +
              </button>
              <button @click="this.$emit('deleteItem', index)" class="btn btn-outline-success">
                -
              </button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-right"><curr :amt="Number(item.product.price)"></curr></td>
          <td class="text-right"><curr :amt="item.qty * Number(item.product.price)"></curr></td>
        </tr>
      </tbody>
    </table>
    <router-link class="btn btn-sm btn-success" to="/">買い物を続ける</router-link>
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
