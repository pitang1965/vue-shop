<template>
  {{ dollar(amt) }}
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['amt'])
const dollar = value => '$' + Number.parseFloat(value).toFixed(2)
</script>
