<template>
  <label for="max-price" class="text-lg">最大金額 (${{ modelValue }})</label>
  <label class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">検索結果: {{ products.length }}</label>
  <input
    type="range"
    class="w-full"
    min="0"
    max="130"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: ['products', 'modelValue']
}
</script>

<style></style>
