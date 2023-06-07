<template>
  <div class="grid grid-cols-12">
    <div class="col-span-2 m-auto">
      <button
        @click="$parent.$parent.$parent.$emit('addItem', item)"
        class="bg-purple-500 hover:bg-purple-600 text-white text-sm font-bold w-8 h-8 rounded"
      >
        +
      </button>
    </div>
    <div class="col-span-4">
      <img class="object-fill" :src="item.image" :alt="item.name" />
    </div>
    <div class="col-span-6 my-auto">
      <h3 class="text-2xl text-purple-500">{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <div class="text-xl float-right">
        <span class="label"></span><curr :amt="item.price"></curr>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import Curr from '@/components/Curr.vue'

const props = defineProps(['item'])
const emits = defineEmits(['addItem'])
</script>
