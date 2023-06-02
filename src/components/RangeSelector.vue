<template>
  <label for="max-price" class="form-label h2">最大金額 (${{ modelValue }})</label>
  <div class="badge bg-success ml-3">検索結果: {{ products.length }}</div>

  <input
    type="range"
    class="form-range"
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
