<template>
  {{ dollar(amt) }}
</template>

<script setup>
const props = defineProps(['amt'])
const dollar = value => '$' + Number.parseFloat(value).toFixed(2)
</script>
